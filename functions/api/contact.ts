export async function onRequestPost(context: {
  request: Request
  env: {
    BREVO_API_KEY?: string
    BREVO_SENDER_EMAIL?: string
    BREVO_RECIPIENT_EMAIL?: string
  }
}) {
  try {
    const { request, env } = context

    const body = await request.json().catch(() => null) as
      | {
          name?: string
          email?: string
          phone?: string
          subject?: string
          message?: string
        }
      | null

    if (!body) {
      return json({ error: 'Invalid request.' }, 400)
    }

    const name = body.name?.trim()
    const email = body.email?.trim()
    const subject = body.subject?.trim()
    const message = body.message?.trim()
    const phone = body.phone?.trim()

    if (!name || !email || !subject || !message) {
      return json({ error: 'Missing required fields.' }, 400)
    }

    const apiKey = env.BREVO_API_KEY
    const senderEmail = env.BREVO_SENDER_EMAIL || 'info@fijicabconnect.com'
    const recipientEmail = env.BREVO_RECIPIENT_EMAIL || 'info@fijicabconnect.com'

    if (!apiKey) {
      return json({ error: 'Email service is not configured.' }, 500)
    }

    const safeSubject = subject.slice(0, 120)
    const safeName = name.slice(0, 120)
    const safeEmail = email.slice(0, 200)
    const safePhone = (phone || '').slice(0, 60)
    const safeMessage = message.slice(0, 5000)

    const htmlContent = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(safePhone || 'Not provided')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(safeMessage).replace(/\\n/g, '<br>')}</p>
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
      return json({ error: 'Failed to send message.', details }, 502)
    }

    return json({ success: true, message: 'Thank you! We’ll get back to you soon.' }, 200)
  } catch {
    return json({ error: 'Failed to send message. Please try again.' }, 500)
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  })
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

