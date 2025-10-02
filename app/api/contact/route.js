import { Resend } from 'resend'
import { NextResponse } from 'next/server'


console.log('🔑 API Key loaded:', process.env.RESEND_API_KEY ? 'YES ✅' : 'NO ❌')
console.log('🔑 First 10 chars:', process.env.RESEND_API_KEY?.substring(0, 10))
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  console.log('✅ API route hit!')
  
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body
    
    console.log('📧 Form data received:', body)

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'CodeNest <onboarding@resend.dev>', // Resend's test domain
      to: ['nitinemailss@gmail.com'], // ⚠️ REPLACE WITH YOUR ACTUAL EMAIL
      replyTo: email, // This lets you reply directly to the customer
      subject: `New Contact: ${service} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                font-family: 'Arial', sans-serif; 
                line-height: 1.6; 
                color: #333; 
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container { 
                max-width: 600px; 
                margin: 20px auto; 
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .header { 
                background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                color: white; 
                padding: 30px 20px; 
                text-align: center; 
              }
              .header h1 { 
                margin: 0; 
                font-size: 24px;
              }
              .content { 
                padding: 30px; 
              }
              .field { 
                margin-bottom: 20px; 
                padding-bottom: 20px;
                border-bottom: 1px solid #e5e7eb;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label { 
                font-weight: bold; 
                color: #2563eb; 
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value { 
                margin-top: 8px; 
                font-size: 16px;
                color: #1f2937;
              }
              .message-box {
                background: #f9fafb;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #2563eb;
              }
              .footer {
                background: #f9fafb;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #6b7280;
              }
              .badge {
                display: inline-block;
                background: #dbeafe;
                color: #1e40af;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-top: 5px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 New Contact Form Submission</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">CodeNest Website</p>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">👤 Customer Name</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email Address</div>
                  <div class="value">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                      ${email}
                    </a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">📱 Phone Number</div>
                  <div class="value">
                    ${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : '<span style="color: #9ca3af;">Not provided</span>'}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">🎯 Service Interested</div>
                  <div class="value">
                    <span class="badge">${service}</span>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">💬 Message</div>
                  <div class="value">
                    <div class="message-box">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <p>
                  <strong>Received:</strong> ${new Date().toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'short',
                    timeZone: 'Asia/Kolkata'
                  })} IST
                </p>
                <p style="margin-top: 10px;">
                  Reply to this email to respond directly to <strong>${name}</strong>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('❌ Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    console.log('✅ Email sent successfully:', data)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        emailId: data.id 
      },
      { status: 200 }
    )
  } catch (error) {
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
