import styled from "styled-components";
import css from "@styled-system/css";

const Container = styled.div`
  margin: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${css({
    flexWrap: ["nowrap", null, "wrap"],
    my: "10%",
    width: ["90vw", null, null, "80vw"],
  })}
`;

const BodyTitle = styled.h1`
  text-align: center;
  ${css({
    fontSize: ["35px", null, null, "50px"],
    mt: ["10%", null, null, "5%"],
  })}
`;

const SkillTable = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${css({
    width: ["55%", null, "40%", "100%"],
  })}
`;

const SkillContent = styled.div`
  font-weight: 700;
  min-width: 200px;
  margin: 20px 0 0 0;
  @media (min-width: 200px) {
    min-width: unset;
    margin: 30px 0;
  }
  span {
    font-size: 20px;
    margin-right: 5px;
    color: #b4cde7;
  }
  ${css({
    color: "secondary",
  })}
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const TextContent = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Skills = () => {
  return (
    <Container>
      <SubContainer>
        <TextContent>
          <BodyTitle>My Skills</BodyTitle>
          <p>
            Through my studies and work experience, I've gained a solid understanding of computer
            science and software development concepts, and have dedicated a lot of my
            free time to apply these concepts to real-world scenarios and
            applications.
          </p>
        </TextContent>
        <SkillTable>
          <row>
            <SkillContent>
              <span>&#9675;</span> React / NextJS
            </SkillContent>
            <SkillContent>
              <span>&#9675;</span> React Native
            </SkillContent>
          </row>
          <row>
            <SkillContent>
              <span>&#9675;</span> HTML / CSS
            </SkillContent>
            <SkillContent>
              <span>&#9675;</span> NodeJS
            </SkillContent>
          </row>
          <row>
            <SkillContent>
              <span>&#9675;</span> TypeScript
            </SkillContent>
            <SkillContent>
              <span>&#9675;</span> MongoDB
            </SkillContent>
          </row>
          <row>
            <SkillContent>
              <span>&#9675;</span> GraphQL
            </SkillContent>
            <SkillContent>
              <span>&#9675;</span> Python
            </SkillContent>
          </row>
        </SkillTable>
      </SubContainer>
    </Container>
  );
};

export default Skills;
