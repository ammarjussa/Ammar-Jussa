import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 15%;
  padding-right: 15%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h1`
  text-align: center;
`;

const ProjectText = styled.p`
  width: 20vw;
`;

const ProjectImage = styled.img`
  width: 25vw;
  padding-top: 20%;
`;

const ProjectImage2 = styled.img`
  width: 10vw;
`;

const Project2 = () => {
  return (
    <div>
      <ProjectTitle>Project 1</ProjectTitle>
      <Container>
        <ProjectText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint
        </ProjectText>
        <ImageContainer>
          <ProjectImage2 src="/amazon_phone.png" />
          <ProjectImage src="/amazon_web.png" />
        </ImageContainer>
      </Container>
    </div>
  );
};

export default Project2;
