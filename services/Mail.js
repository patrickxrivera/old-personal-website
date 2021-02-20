import sgMail from "@sendgrid/mail";

const FROM_ADDRESS = "patrick.x.rivera@gmail.com";

const TO_ADDRESS = "patrick.x.rivera@gmail.com";

const sendGridApiKey = process.env.SENDGRID_API_KEY;

const TEMPLATE_ID = "d-a8183960a1f84cb7abfd778cc5b8cd63";

class MailService {
  static async send(email) {
    const svc = new MailService();

    const dynamicTemplateData = {
      email,
    };

    return svc.send({
      to: TO_ADDRESS,
      templateId: TEMPLATE_ID,
      dynamicTemplateData,
    });
  }

  constructor() {
    this.client = sgMail;
    this.client.setApiKey(sendGridApiKey);
  }

  async send({ to, templateId, dynamicTemplateData }) {
    const msg = {
      to,
      from: FROM_ADDRESS,
      templateId,
      dynamicTemplateData,
    };

    try {
      const res = await this.client.send(msg);
      return res;
    } catch (error) {
      // TODO: log error
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }

      return null;
    }
  }
}

export default MailService;
