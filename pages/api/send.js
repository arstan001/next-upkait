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

  // try {
    await sgMail.send(content)

    res.status(200).send('Message sent successfully.')
    return
    // catch (error) {
    // console.log('ERROR', error)
    // res.status(400).send('Message not sent.')
  // }
}