import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_USER_ID as string);

const ContactUs = () => {
  const form: any = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    const body = {
      from_name: name,
      to_name: "Ammar Jussa",
      message,
      email,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        body,
        process.env.NEXT_PUBLIC_USER_ID as string
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
