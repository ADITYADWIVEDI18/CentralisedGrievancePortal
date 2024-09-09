import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "aditya.pandey.1018@gmail.com",
        pass: "jdloubnggiewkldi",
    },
});

export const sendGrievanceResolvedEmail = async (grievance, author) => {
    const mailOptions = {
        from: "aditya.pandey.1018@gmail.com", // sender
        to: author.email, // receiver
        subject: 'Your Grievance Has Been Resolved',
        text: `Dear ${author.name},\n\nYour grievance has been resolved.\n\nGrievance Details:\n${grievance.grievance}\n\nResolved At: ${new Date()}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        // Handle error (optional)
    }
};
