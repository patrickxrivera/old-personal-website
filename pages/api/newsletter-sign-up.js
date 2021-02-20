import MailService from "../../services/Mail";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(500).json({ message: "API error" });
  }

  const { email } = req.body;

  try {
    const response = await MailService.send(email);

    if (!response) {
      throw new Error("Error sending through SendGrid");
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "API error " });
  }
};
