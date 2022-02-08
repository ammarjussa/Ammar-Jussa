import styled from "styled-components";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import css from "@styled-system/css";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 5%;
  padding-bottom: 10%;

  ${css({
    flexDirection: ["column", null, null, null, null, "row"],
    justifyContent: ["center", null, null, null, null, "space-around"],
  })}
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 7%;
`;

const ProjectTitle = styled.h1`
  text-align: center;
  font-size: 40px;
`;

const DescriptionHeader = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const ProjectText = styled.p`
  text-align: center;

  ${css({
    width: ["80vw", null, null, null, null, "30vw"],
  })}
`;

const ProjectImage = styled.img`
  ${css({
    width: ["80vw", null, null, null, null, "25vw"],
  })}
`;

const ProjectImage2 = styled.img`
  padding-top: 40%;
  ${css({
    width: ["50vw", null, null, null, null, "10vw"],
  })}
`;

interface Props {
  project: any;
}

const Project2: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <LightSpeed right>
        <ProjectTitle>{project?.heading}</ProjectTitle>
      </LightSpeed>
      <Container>
        <Fade left>
          <div>
            <DescriptionHeader>{project?.subHeading}</DescriptionHeader>
            <ProjectText>{project?.description}</ProjectText>
          </div>
        </Fade>
        <ImageContainer>
          <Fade right>
            <ProjectImage src={project?.web} />
          </Fade>
          <Fade top>
            <ProjectImage2 src={project?.phone} />
          </Fade>
        </ImageContainer>
      </Container>
    </div>
  );
};

export default Project2;
