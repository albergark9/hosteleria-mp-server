import * as nodemailer from 'nodemailer'

async function sendMailTo(destination: string, subject: string, message: string) {
    // support mail credentials
    const transporter = nodemailer.createTransport({
        service: 'xxxxxxxx',
        host: 'xxxxxxxxxxxx',
        port: 465,
        secure: true,
        auth: {
            user: 'xxxxxxxxxxx',
            pass: 'xxxxxxxxxxxx'
        }
    });

    // mail content and data
    let mailOptions = {
        from: 'xxxxxxxxxxxxx',
        to: destination,
        subject: subject,
        text: message   // html: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export {
    sendMailTo
};
