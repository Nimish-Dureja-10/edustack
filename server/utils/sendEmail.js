import {createTransport} from "nodemailer";


export const sendMail = async (to,subject,text) => {
    const transporter = createTransport();

    await transporter.sendMail({
        to,
        subject,
        text,
        from : "myid@gmail.com"
    });
}