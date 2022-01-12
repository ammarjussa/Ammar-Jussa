import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { css } from "styled-components";

import { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_USER_ID as string);

const ContactContainer = styled.div`
  width: 85vw;
  height: 80vh;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <ContactContainer>
      <DescriptionContainer>
        <h1>Contact</h1>
        <p>Get in Touch</p>
        <p>Email: ammar26497@gmail.com</p>
        <SocialMediaContainer>
          <div>
            <a
              href="https://www.linkedin.com/in/ammar-jussa-56a1b216a/"
              target="_blank"
            >
              <img src="/linkedin.svg" height="50px" width="50px" />
            </a>

            <a href="https://github.com/ammarjussa/" target="_blank">
              <img src="/github.png" height="50px" width="50px" />
            </a>
          </div>
        </SocialMediaContainer>
      </DescriptionContainer>

      <div>
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
      </div>
    </ContactContainer>
  );
};

export default ContactUs;
