import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "rrrr",
        pass: "pppp"
    },

    secure: true,

    port: 465,

    host: 'smtp.gmail.com',

})


export default transporter