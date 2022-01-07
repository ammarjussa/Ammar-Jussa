import styled from "styled-components";
import Project1 from "./Project1";
import Project2 from "./Project2";

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
        <Project1 />
        <Project2 />
        <Project1 />
        <Project2 />
      </Container>
    </>
  );
};

export default Projects;
