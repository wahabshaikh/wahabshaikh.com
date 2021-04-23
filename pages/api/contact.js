const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = JSON.parse(req.body);
    const data = {
      from: `Wahab Shaikh <wahabshaikh@mg.wahabshaikh.me>`,
      to: "wahab.shaikh@somaiya.edu",
      subject: `Message from ${name} <${email}>`,
      text: `
      Name: ${name}
      Email: ${email}
      
      Message: 
      ${message}
      `,
    };

    mg.messages().send(data, function (error, body) {
      console.log(body);
    });

    res.status(200).json({ body: "Message sent!" });
  }
}
