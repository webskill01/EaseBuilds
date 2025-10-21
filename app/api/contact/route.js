import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// Zod validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string()
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  service: z.string()
    .min(1, 'Please select a service'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long'),
  honeypot: z.string().optional(), // Spam protection
  withinFomoOffer: z.boolean().optional(),
  submittedAt: z.string().optional(),
})

export async function POST(request) {
  console.log('✅ Contact API route hit!')

  try {
    const body = await request.json()
    
    // Check honeypot (spam protection)
    if (body.honeypot && body.honeypot.trim() !== '') {
      console.log('🚫 Spam detected via honeypot')
      return NextResponse.json(
        { success: false, error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Validate with Zod
    const validatedData = contactSchema.parse(body)
    
    const { name, email, phone, service, message, withinFomoOffer, submittedAt } = validatedData

    console.log('📧 Form data received:', { name, email, service, withinFomoOffer })

    // Send notification email to you (business owner)
    const { data, error } = await resend.emails.send({
      from: 'EaseBuilds <onboarding@resend.dev>',
      to: ['easebuilds.in@gmail.com'],
      replyTo: email,
      subject: `${withinFomoOffer ? '🔥 FOMO OFFER!' : '📬'} New Contact: ${service} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .fomo-badge { background: #f59e0b; color: white; padding: 10px 20px; border-radius: 25px; display: inline-block; font-weight: bold; margin-top: 12px; font-size: 14px; animation: pulse 2s infinite; }
            @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
            .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0ea5e9; display: block; margin-bottom: 5px; font-size: 14px; }
            .value { background: #f3f4f6; padding: 12px; border-radius: 5px; font-size: 15px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 13px; }
            .whatsapp-btn { display: inline-block; background: #25D366; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; margin-top: 15px; font-weight: bold; font-size: 14px; }
            .whatsapp-btn:hover { background: #20BA5A; }
            .offer-box { background: #fef3c7; border-left: 5px solid #f59e0b; padding: 20px; margin-bottom: 25px; border-radius: 5px; }
            .offer-box h3 { margin: 0 0 10px 0; color: #f59e0b; font-size: 18px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🎉 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px;">EaseBuilds Website</p>
              ${withinFomoOffer ? '<div class="fomo-badge">⚡ WITHIN 24HR FOMO OFFER WINDOW! 🔥</div>' : ''}
            </div>
            <div class="content">
              ${withinFomoOffer ? `
                <div class="offer-box">
                  <h3>🎁 Special Offer Alert!</h3>
                  <p style="margin: 0; font-size: 15px; line-height: 1.6;">
                    This customer contacted <strong>within the 24-hour offer window</strong>.<br>
                    <strong style="color: #f59e0b; font-size: 16px;">Eligible for: 1 Month FREE Hosting 🚀</strong>
                  </p>
                </div>
              ` : ''}
              
              <div class="field">
                <span class="label">👤 Customer Name</span>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <span class="label">📧 Email Address</span>
                <div class="value"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <span class="label">📱 WhatsApp Number</span>
                <div class="value">${phone || 'Not provided'}</div>
                ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="whatsapp-btn">💬 Contact on WhatsApp</a>` : ''}
              </div>

              <div class="field">
                <span class="label">🎯 Service Interested</span>
                <div class="value">${service}</div>
              </div>

              <div class="field">
                <span class="label">💬 Message</span>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>

              <div class="field">
                <span class="label">🕒 Received At</span>
                <div class="value">${new Date(submittedAt || Date.now()).toLocaleString('en-US', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                  timeZone: 'Asia/Kolkata'
                })} IST</div>
              </div>
            </div>
            <div class="footer">
              <p style="font-size: 14px; margin-bottom: 8px;">
                <strong>Click "Reply" to respond directly to ${name}</strong>
              </p>
              <p style="margin: 5px 0;">
                📧 Replying to this email will send your message to: <strong>${email}</strong>
              </p>
              ${withinFomoOffer ? `
                <p style="color: #f59e0b; font-weight: bold; margin-top: 12px;">
                  ⚡ Don't forget to mention the FREE hosting offer!
                </p>
              ` : ''}
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
              <p style="color: #9ca3af; font-size: 12px;">
                EaseBuilds - Professional Web Development Services - Patiala Punjab
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('❌ Email error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully')

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        emailId: data?.id,
        fomoOfferApplied: withinFomoOffer
      },
      { status: 200 }
    )

  } catch (error) {
    // Zod validation error
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0]
      console.error('❌ Validation error:', firstError.message)
      return NextResponse.json(
        {
          success: false,
          error: firstError.message,
          errors: error.errors
        },
        { status: 400 }
      )
    }

    // Generic error
    console.error('❌ API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: error.message
      },
      { status: 500 }
    )
  }
}
