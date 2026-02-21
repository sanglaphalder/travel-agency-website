const SibApiV3Sdk = require('sib-api-v3-sdk');

const client = SibApiV3Sdk.ApiClient.instance;

client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

const sendEmail = async ({ to, subject, text, html }) => {
    return emailApi.sendTransacEmail({
        sender: {
            email: process.env.SENDER_EMAIL,
            name: "TravelAgency"
        },
        to: [{ email: to }],
        subject,
        textContent: text,
        htmlContent: html
    });
};

module.exports = { sendEmail };
