const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
//transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID
        },
    })
);
const sendEmailController = (req, res) => { 
    try {
        const { name, email, msg } = req.body;
        //validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message:"please Provide all field",
            })
        }
        //email matter
        transporter.sendMail({
            to: "indianraj360@gmail.com",
            from: "ys765021@gmail.com",
            subject: "Regarding MERN_PORTFOLIO_APP",
            html: `
            <h5>Detail Information</h5>
            <ul>
            <li><p>Name:${name}</p></li>
            <li><p>Email:${email}</p></li>
            <li><p>Message:${msg}</p></li>
            </ul>
            `
        })
        return res.status(200).send({
            success: true,
            message:"Your message send successfully",
        })
        
    }
    catch (error) {
        console.log(error);
        return res.status(5000).send({
            success: false,
            message: "Send Email API Error",
            error
        })
        
    }
};
module.exports = {sendEmailController};
