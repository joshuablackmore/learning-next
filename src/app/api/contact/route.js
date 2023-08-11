import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;

export async function POST(req) {
  const { name, email, message } = await req.json();
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: "Excited User <me@samples.mailgun.org>",
    to: "joshuablackmore@gmail.com",
    subject: "Hello",
    text: `Hello you have a new message from ${name} - ${email}. 
  ${message}`,
  };

  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("name: ", name);
  console.log("email: ", email);
  console.log("message: ", message);

  return NextResponse.json({ msg: ["Hi from api/contact/route.js"] });
}
