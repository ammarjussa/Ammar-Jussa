import styled from "styled-components";
import Texts from "./bodyText.json";
import css from "@styled-system/css";

const Container = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

const BodyTitle = styled.h1`
  text-align: center;
  ${css({
    fontSize: ["35px", null, null, "50px"],
    mt: ["10%", null, null, "5%"],
  })}
`;

const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80vw;

  p {
    width: 45%;
  }
`;

const MyImage = styled.img`
  height: 20%;
  border-radius: 3%;
  box-shadow: 5px 5px 2px;

  ${css({
    width: ["90vw", null, null, "80vw"],
  })}
`;

const Body: React.FC = () => {
  return (
    <Container>
      <MyImage src="/ammarjussa.png" />
      <BodyTitle>About Me</BodyTitle>
      <TextContent>
        <p>{Texts.text1}</p>
        <p>{Texts.text2}</p>
      </TextContent>
    </Container>
  );
};

export default Body;
