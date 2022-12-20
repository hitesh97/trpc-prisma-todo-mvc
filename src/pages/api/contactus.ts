import type { NextApiRequest, NextApiResponse } from "next";
import mailJet from "node-mailjet";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.email || !body.subject || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "bad request" });
  }

  try {
    const mailJetClient = mailJet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC || "",
      process.env.MJ_APIKEY_PRIVATE || ""
    );

    const request = mailJetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MJ_SENDER_EMAIL,
          },
          To: [
            {
              Email: body.email,
              Name: body.name,
            },
          ],
          Subject: body.subject,
          TextPart:
            body.message,
          HTMLPart:
          body.message,
        },
      ],
    });
    request
      .then(() => {
        // Found the name.
        // Sends a HTTP success code
        return res.status(200).json({ success:true, message: 'Email sent!' });
      })
      .catch((err) => {});
  } catch (e) {
    //error connecting to mailjet account
    return res.status(500).json({ success:false, message: "internal server error" });
  }
  // return res.status(200).json({ success:false, message: 'There was unknown error, Please try again later.' });
}
