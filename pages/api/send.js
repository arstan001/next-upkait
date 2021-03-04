const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { email, name, company,phone, message } = req.body

  const content = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `Hello from ${company}`,
    text: message,
    html: `<p>Company Name: ${company} <br> Name: ${name} <br>Mobile Phone: ${phone}<br> Message: ${message}</p>`
  }
  try {
    await sgMail.send(content) // pause until promise is resolved
    res.status(200).send("message sent")
  } catch(error) {
    // res.status(400).send(error) for debugging
    res.status(400).send("message failed to send")
  }
}