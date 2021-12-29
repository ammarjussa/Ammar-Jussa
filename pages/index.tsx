import styled from "styled-components";
import Body from "../components/Body";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Project from "../components/Project";

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;
  margin-top: 0px;
  height: unset;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <Layout>
      <Heading />
      <Body />
      <ProjectContainer>
        <Project />
        <Project />
      </ProjectContainer>
    </Layout>
  );
}
