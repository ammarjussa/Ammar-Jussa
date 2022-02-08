import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import css from "@styled-system/css";

import { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_USER_ID as string);

const ContactContainer = styled.div`
  width: 85vw;
  min-height: 80vh;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  align-self: center;
  display: flex;
  align-items: center;
  transition: 0.5s;
  ${css({
    bg: "form",
    flexDirection: ["column", null, null, "row"],
    justifyContent: ["center", null, null, "space-around"],
    my: ["20%", null, null, "0px"],
  })}
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

  ${css({
    ml: ["0px", null, null, "10%"],
    mt: ["20%", null, null, "0px"],
  })}
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
  ${css({
    mr: ["0px", null, null, "10%"],
    my: ["20%", null, null, "0px"],
    width: ["70vw", null, null, "50vw"],
  })}
`;

const StyledInput = styled.input`
  display: flex;
  ${css({
    pl: "10px",
    py: "10px",
    marginBottom: "20px",
  })}

  &:focus {
    outline: none !important;
    border: 1px solid green;
    box-shadow: 0 0 4px green;
  }
`;

const StyledArea = styled.textarea`
  min-height: 150px;
  ${css({
    pl: "10px",
    py: "15px",
    marginBottom: "20px",
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
    py: "10px",
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

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
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
    } else {
      alert("Please fill the form completely");
    }
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
