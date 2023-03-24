import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { mail, name, message } = req.body;

    if (
      !mail ||
      !name ||
      !message ||
      mail.trim() === "" ||
      name.trim() === "" ||
      message.trim() === ""
    ) {
      return res.status(422).json({ error: "Date is invalid!" });
    }

    // if (!mail.trim() || !name.trim() || !message.trim()) {
    //   return res.status(422).json({ error: "Date is invalid!" });
    // }

    return res.status(201).json({ message: "succeed" });
  }
  res.status(404).json({ error: "Invalid enpoint" });
}

export default handler;
