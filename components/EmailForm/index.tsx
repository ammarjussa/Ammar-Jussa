import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import css from "@styled-system/css";

import { init } from "@emailjs/browser";
init(process.env.NEXT_PUBLIC_USER_ID as string);

const ContactContainer = styled.div`
  width: 85vw;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  ${css({
    minHeight: ["65vh", null, null, null, "51vh", null, null, null, "80vh"],
    bg: "form",
    justifyContent: ["center", null, null, "space-around"],
    my: ["20%", null, null, "0px"],
  })}
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  ${css({
    flexDirection: ["column", null, null, "row"],
  })}
`;

const Title = styled.h1`
  text-align: center;
  ${css({
    mt: ["20%", null, null, "0px"],
  })}
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 51vw;

  ${css({
    ml: ["0px", null, null, "15%"],
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
  cursor: pointer;

  img {
    ${css({
      height: ["50px"],
      width: ["50px"],
      mr: ["5px", null, null, "10px"],
    })}
  }

  &:hover {
    opacity: 0.7;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  ${css({
    mr: ["0px", null, null, "15%"],
    my: ["25%", null, null, "0px"],
    width: ["65vw", null, null, "40vw"],
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

const ContactImg = styled.img`
  ${css({
    height: ["100%", null, null, "70%"],
    width: ["100%", null, null, "70%"],
    mb: [3, null, null, 0],
  })};
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
            alert(
              "Email is sent successfully.\nYou'll be contacted in 1-2 business days"
            );
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            alert(
              "There might be some issue. Please try again later or contact through the other details mentioned. Sorry for inconvenience."
            );
            console.log(error.text);
          }
        );
    } else {
      alert("Please fill the form completely");
    }
  };

  return (
    <>
      <ContactContainer>
        <Title>CONTACT</Title>
        <FlexContainer>
          <DescriptionContainer>
            <div>
              <StyledText></StyledText>
              <ContactImg src="/contact.svg" alt="contact" />
            </div>
            <SocialMediaContainer>
              <div>
                <SocialLinks
                  href="https://www.linkedin.com/in/ammar-jussa-56a1b216a/"
                  target="_blank"
                >
                  <img src="/linkedin.svg" />
                </SocialLinks>

                <SocialLinks
                  href="https://github.com/ammarjussa/"
                  target="_blank"
                >
                  <img src="/github.png" />
                </SocialLinks>
                <SocialLinks
                  href="https://github.com/ammarjussa/"
                  target="_blank"
                >
                  <img src="/leetcode.png" />
                </SocialLinks>
                <SocialLinks
                  href="https://github.com/ammarjussa/"
                  target="_blank"
                >
                  <img src="/hackerrank.png" />
                </SocialLinks>
                <SocialLinks
                  href="https://github.com/ammarjussa/"
                  target="_blank"
                >
                  <img src="/upwork.png" />
                </SocialLinks>
                <SocialLinks
                  href="https://github.com/ammarjussa/"
                  target="_blank"
                >
                  <img src="/fiverr.png" />
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
        </FlexContainer>
      </ContactContainer>
    </>
  );
};

export default ContactUs;
