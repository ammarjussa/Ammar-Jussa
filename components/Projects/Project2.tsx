import styled from "styled-components";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import css from "@styled-system/css";
import TechIcons from "./TechIcons";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5%;

  ${css({
    flexDirection: ["column", null, null, null, null, "row"],
    justifyContent: ["center", null, null, null, null, "space-around"],
    pb: ["30%", null, null, null, null, "15%"],
  })}
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${css({
    pb: ["30%", null, null, null, null, "0px"],
  })}
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${css({
    my: ["20px"],
  })}
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${css({
    ml: [0, null, null, null, null, "10%"],
  })}
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
  margin: 0;

  ${css({
    width: ["90vw", null, null, null, null, "40vw", null, null, "30vw"],
    mt: ["20px"],
  })}
`;

const NavLink = styled.a`
	font-weight: 700;
	cursor: pointer;
	margin: 0;

	&:hover {
		text-decoration: underline;
	}

	@media (min-width: 200px) {
		min-width: unset;
		margin: 10px 0; 


`;

const ProjectImage = styled.img`
  ${css({
    width: ["70vw", null, null, null, null, "35vw", null, null, "25vw"],
  })}
`;

const ProjectImage2 = styled.img`
  padding-top: 40%;
  ${css({
    width: ["30vw", null, null, null, null, "15vw", null, null, "10vw"],
    mb: ["20%", null, null, null, null, 0],
  })}
`;

interface Props {
  project: any;
  theme: string;
}

const Project2: React.FC<Props> = ({ project, theme }) => {
  return (
    <div>
      <LightSpeed right>
        <ProjectTitle>{project?.heading}</ProjectTitle>
      </LightSpeed>
      <Container>
        <Fade left>
          <Box>
            <DescriptionHeader>{project?.subHeading}</DescriptionHeader>
            <ProjectText>{project?.description}</ProjectText>
            <Flex>
              {project?.github ? (
                <NavLink href={project.github} target="_blank">
                  Github
                </NavLink>
              ) : null}
              {project?.live ? (
                <NavLink href={project.live} target="_blank">
                  Live
                </NavLink>
              ) : null}
            </Flex>
            <TechIcons tech={project.tools} theme={theme} />
          </Box>
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
