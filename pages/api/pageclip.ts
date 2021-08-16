import Pageclip from "pageclip";

const pageclip = new Pageclip(process.env.PAGECLIP_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = JSON.parse(req.body);
      const response = await pageclip.send({ name, email, message });
      res.status(response.status).json(response.data);
    } catch (error) {
      res.end();
    }
  }
}
