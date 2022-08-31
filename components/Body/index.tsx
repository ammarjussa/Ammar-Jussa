import styled from "styled-components";
import Texts from "./bodyText.json";
import css from "@styled-system/css";
import Skills from "../Skills";

const Container = styled.div`
  padding-top: 10%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyTitle = styled.h1`
  text-align: center;
  ${css({
    fontSize: ["35px", null, null, "50px"],
    mt: ["10%", null, null, "10%"],
  })}
`;

const TextContent = styled.div`
  p {
    margin: 0;
    ${css({
      mt: 3,
      width: ["90vw", null, null, "80vw"],
      textAlign: ["center", null, null, null, null, null, null, null, "left"],
    })}
  }

  ${css({
    justifyContent: ["center", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    maxWidth: ["90vw", null, null, "80vw"],
  })}
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
      <div id="about">
        <MyImage src="/ammarjussa.png" />
        <BodyTitle>About Me</BodyTitle>
        <TextContent>
          <p>{Texts.text}</p>
          <p>{Texts.text2}</p>
          <p>{Texts.text3}</p>
          <p>{Texts.text4}</p>
        </TextContent>
      </div>
      <div id="skills">
        <Skills />
      </div>
    </Container>
  );
};

export default Body;
