import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Project2";
import {
  Tefi,
  Portfolio,
  Bank_App,
  Raaz,
  TefiAgora,
  FoodBubble,
  SecureFlow,
} from "./ProjectsList";

const Container = styled.div`
  padding-top: 3%;
`;

const BodyTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 5%;
`;

interface Props {
  theme: string;
}

const Projects: React.FC<Props> = ({ theme }) => {
  return (
    <>
      <BodyTitle>View My Work</BodyTitle>
      <Container>
        <Project1 theme={theme} project={Tefi} />
        <Project2 theme={theme} project={Raaz} />
        <Project1 theme={theme} project={SecureFlow} />
        <Project2 theme={theme} project={FoodBubble} />
        <Project1 theme={theme} project={Portfolio} />
        <Project2 theme={theme} project={TefiAgora} />
        <Project1 theme={theme} project={Bank_App} />
      </Container>
    </>
  );
};

export default Projects;
