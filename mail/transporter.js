const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    post: 587,
    secure: false,
    auth: {
        user: 'clementine.davis@ethereal.email', 
        pass: 'q5TMu9UzP8Ax8wrF1a'
    }
})

module.exports = transporter