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
  sgMail.send(content, (err, result) => {
    if (err) {
      const debug = {
        Error: err,
        API_KEY: process.env.SENDGRID_API_KEY,
        Message: err.message,
        Code: err.code,
      }
      res.status(400).send(debug)
    } else {
      res.status(200).send(result)
    }
  })
}