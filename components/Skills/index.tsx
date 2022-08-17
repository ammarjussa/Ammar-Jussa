import styled from "styled-components";
import css from "@styled-system/css";
import { SkillCard } from "./SkillCard";
import { FrontEnd, BackEnd, Web3, Tools } from "./skillsList";

const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  ${css({
    my: "10%",
    width: ["80vw", null, null, "80vw"],
  })}
`;

const BodyTitle = styled.h1`
  text-align: center;
  ${css({
    fontSize: ["35px", null, null, "50px"],
    mt: ["10%", null, null, "5%"],
  })}
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextContent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceCards = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${css({
    flexDirection: ["column", null, null, null, null, null, "row"],
  })}
`;

const Skills = () => {
  return (
    <Container>
      <SubContainer>
        <TextContent>
          <BodyTitle>My Skills</BodyTitle>
        </TextContent>
        <ServiceCards>
          <SkillCard {...FrontEnd} />
          <SkillCard {...BackEnd} />
        </ServiceCards>
        <ServiceCards>
          <SkillCard {...Web3} />
          <SkillCard {...Tools} />
        </ServiceCards>
      </SubContainer>
    </Container>
  );
};

export default Skills;
