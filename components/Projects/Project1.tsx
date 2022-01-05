import styled from "styled-components";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

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
`;

const ProjectImage2 = styled.img`
  width: 10vw;
  padding-top: 20%;
`;

const Project1 = () => {
  return (
    <div>
      <LightSpeed left>
        <ProjectTitle>Project 1</ProjectTitle>
      </LightSpeed>

      <Container>
        <ImageContainer>
          <Fade left>
            <ProjectImage src="/amazon_web.png" />
          </Fade>
          <Fade top>
            <ProjectImage2 src="/amazon_phone.png" />
          </Fade>
        </ImageContainer>
        <Fade right>
          <ProjectText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint
          </ProjectText>
        </Fade>
      </Container>
    </div>
  );
};

export default Project1;
