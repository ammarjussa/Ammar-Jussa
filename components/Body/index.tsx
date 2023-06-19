import styled from "styled-components";
import Texts from "./bodyText.json";
import css from "@styled-system/css";
import Skills from "../Skills";

const Container = styled.div`
  padding-top: 10%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyTitle = styled.h1`
  text-align: center;
  ${css({
    fontSize: ["35px", null, null, "50px"],
    mt: ["10%", null, null, "10%"],
  })}
`;

const TextContent = styled.div`
  p {
    margin: 0;
    ${css({
      mt: 3,
      width: ["90vw", null, null, "80vw"],
      textAlign: ["center", null, null, null, null, null, null, null, "left"],
    })}
  }

  ${css({
    justifyContent: ["center", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    maxWidth: ["90vw", null, null, "80vw"],
  })}
`;

const EducationFlex = styled.div`
  display: flex;
  margin-top: 40px;
  ${css({
    justifyContent: ["center", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    maxWidth: ["90vw", null, null, "50vw"],
  })}
`;

const EduFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EducationLogo = styled.img`
  margin-bottom: 10px;
  ${css({
    width: "170px",
    height: "170px",
  })}
`;

const EducationContent = styled.div`
  p {
    margin: 0px;
    ${css({
      width: ["90vw", null, null, "40vw"],
      textAlign: "center",
    })}
  }
`;

const MyImage = styled.img`
  height: 20%;
  border-radius: 3%;
  box-shadow: 5px 5px 2px;

  ${css({
    width: ["90vw", null, null, "80vw"],
  })}
`;

const Body: React.FC = () => {
  return (
    <Container>
      <div id="about">
        <MyImage src="/ammarjussa.png" />
        <BodyTitle>About Me</BodyTitle>
        <TextContent>
          <p>{Texts.text}</p>
          <p>{Texts.text2}</p>
          <p>{Texts.text3}</p>
          <p>{Texts.text4}</p>
        </TextContent>
        <BodyTitle>Education</BodyTitle>
        <EducationFlex>
          <EduFlex>
            <EducationLogo src="/lums.svg" />
            <EducationContent>
              <p>
                <b>University Name: </b>
                {Texts.uni1}
              </p>
              <p>
                <b>Place: </b>
                {Texts.place1}
              </p>
              <p>
                <b>Degree: </b>
                {Texts.degree1}
              </p>
              <p>
                <b>Date: </b>
                {Texts.date1}
              </p>
              <p>
                <b> Relevant Courses: </b>
                {Texts.relevantCourses1.course1},&nbsp;
                {Texts.relevantCourses1.course2},&nbsp;
                {Texts.relevantCourses1.course3},&nbsp;
                {Texts.relevantCourses1.course4}
              </p>
            </EducationContent>
          </EduFlex>
          <EduFlex>
            <EducationLogo src="/kingston.png" />
            <EducationContent>
              <p>
                <b>University Name: </b>
                {Texts.uni2}
              </p>
              <p>
                <b>Place: </b>
                {Texts.place2}
              </p>
              <p>
                <b>Degree: </b>
                {Texts.degree2}
              </p>
              <p>
                <b>Date: </b>
                {Texts.date2}
              </p>
              <p>
                <b> Relevant Courses: </b>
                {Texts.relevantCourses2.course1},&nbsp;
                {Texts.relevantCourses2.course2},&nbsp;
                {Texts.relevantCourses2.course3},&nbsp;
                {Texts.relevantCourses2.course4}
              </p>
            </EducationContent>
          </EduFlex>
        </EducationFlex>
      </div>
      <div id="skills">
        <Skills />
      </div>
    </Container>
  );
};

export default Body;
