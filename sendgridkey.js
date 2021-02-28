const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.API_KEY)

const message = {
    to: 'arstanashyrbekov@gmail.com',
    from: 'upkait02@gmail.com',
    subject: 'Hello from Upkait',
    text: 'Text from Upkait',
    html: '<h1>Hello from HTML</h1>'
}

sgMail
    .send(message)
    .then(response => console.log('email sent'))
    .catch((error)=>alert(error.message));