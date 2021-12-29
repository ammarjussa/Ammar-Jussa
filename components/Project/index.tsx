import styled from "styled-components";
import Link from "next/link";

const ProjectImage = styled.div`
  width: 80%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
  background-image: url("photo.jpg");
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
`;

const ProjectLink = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
  :hover {
    border-bottom: 2px solid black;
  }
  span {
    font-size: 20px;
  }
`;

const ProjectContainer = styled.div`
  width: 35vw;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;
  :hover {
    ${ProjectImage} {
      transform: scale(1.03);
    }
    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }
  :nth-child(1) {
    margin-right: 0;
  }
}
`;

const ProjectParagraph = styled.p`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;
`;

const SubHeading = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
`;

const Project: React.FC = () => {
  return (
    <>
      <ProjectContainer>
        <Link href="/project">
          <ProjectImage style={{ backgroundPosition: "right" }} />
        </Link>
        <Link href="/project">
          <SubHeading>Working at Awkward</SubHeading>
        </Link>
        <ProjectParagraph>
          Read about my experience as an intern at Awkward, a digital design
          agency.
        </ProjectParagraph>
        <Link href="/project">
          <ProjectLink>
            Read Story <span>&#8250;</span>
          </ProjectLink>
        </Link>
      </ProjectContainer>
    </>
  );
};

export default Project;
