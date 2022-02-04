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
  width: 50vw;
`;

const StyledText = styled.p`
  margin: 0;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SocialLinks = styled.a`
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin-right: 10%;
`;

const StyledInput = styled.input`
  display: flex;
  ${css({
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  })}

  &:focus {
    outline: none !important;
    border: 1px solid green;
    box-shadow: 0 0 4px green;
  }
`;

const StyledArea = styled.textarea`
  min-height: 100px;
  ${css({
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  })}

  &:focus {
    outline: none !important;
    border: 1px solid green;
    box-shadow: 0 0 4px green;
  }
`;

const StyledSubmit = styled.input`
  border: 1px solid lightgray;
  transition: 0.5s;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  ${css({
    paddingTop: 8,
    paddingBottom: 8,
  })};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
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
        <div>
          <h1>CONTACT</h1>
          <br />

          <StyledText>
            <b>Get in touch.</b>
          </StyledText>
          <StyledText>Email: ammar26497@gmail.com</StyledText>
        </div>
        <SocialMediaContainer>
          <div>
            <SocialLinks
              href="https://www.linkedin.com/in/ammar-jussa-56a1b216a/"
              target="_blank"
            >
              <img src="/linkedin.svg" height="50px" width="50px" />
            </SocialLinks>

            <SocialLinks href="https://github.com/ammarjussa/" target="_blank">
              <img src="/github.png" height="50px" width="50px" />
            </SocialLinks>
          </div>
        </SocialMediaContainer>
      </DescriptionContainer>

      <FormContainer ref={form} onSubmit={sendEmail}>
        <StyledInput
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <StyledInput
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledArea
          name="message"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <StyledSubmit type="submit" value="Send" />
      </FormContainer>
    </ContactContainer>
  );
};

export default ContactUs;
