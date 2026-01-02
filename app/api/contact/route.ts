import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY
    const senderEmail = process.env.BREVO_SENDER_EMAIL || 'info@fijicabconnect.com'
    const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL || 'info@fijicabconnect.com'

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    const safeSubject = String(subject).slice(0, 120)
    const safeName = String(name).slice(0, 120)
    const safeEmail = String(email).slice(0, 200)
    const safePhone = String(phone || '').slice(0, 60)
    const safeMessage = String(message).slice(0, 5000)

    const htmlContent = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(safePhone || 'Not provided')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(safeMessage).replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Sent from FIJI CAB CONNECT website contact form</small></p>
    `.trim()

    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { name: 'FIJI CAB CONNECT Website', email: senderEmail },
        to: [{ email: recipientEmail }],
        replyTo: { email: safeEmail, name: safeName },
        subject: `Website contact: ${safeSubject}`,
        htmlContent,
      }),
    })

    if (!brevoRes.ok) {
      const details = await brevoRes.text().catch(() => '')
      console.error('Brevo error:', brevoRes.status, details)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We’ll get back to you soon.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
