import styled from "styled-components";
import css from "@styled-system/css";

const Container = styled.div`
  margin-top: 100px;
`;

const Rights = styled.p`
  margin: 0;
  text-align: center;
  ${css({
    fontSize: ["14px", null, null, "16px"],
  })}
`;

const Footer = () => {
  return (
    <Container>
      <Rights>© Ammar Jussa 2023. All rights reserved</Rights>
    </Container>
  );
};

export default Footer;
