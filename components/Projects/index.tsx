import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Project2";
import { Tefi, Amazon, SmartSchool } from "./ProjectsList";

const Container = styled.div`
  padding-top: 3%;
`;

const BodyTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 5%;
`;

const Projects: React.FC = () => {
  return (
    <>
      <BodyTitle>View My Work</BodyTitle>
      <Container>
        <Project1 project={Tefi} />
        <Project2 project={Amazon} />
        <Project1 project={Tefi} />
        <Project2 project={SmartSchool} />
      </Container>
    </>
  );
};

export default Projects;
