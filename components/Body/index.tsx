import Texts from "./bodyText.json";
import Skills from "../Skills";
import {
  Container,
  MyImage,
  BodyTitle,
  TextFlex,
  TextContent,
  EducationFlex,
  EduFlex,
  EducationLogo,
  EducationContent,
} from "./styles";

const Body: React.FC = () => {
  return (
    <Container>
      <div id="about">
        <TextFlex>
          <MyImage src="/ammarjussa.png" />
          <BodyTitle>About Me</BodyTitle>
          <TextContent>
            <p>{Texts.text}</p>
            <p>{Texts.text2}</p>
            <p>{Texts.text3}</p>
            <p>{Texts.text4}</p>
          </TextContent>
        </TextFlex>
        <BodyTitle>Education</BodyTitle>
        <EducationFlex>
          <EduFlex>
            <EducationLogo src="/lums.svg" />
            <EducationContent>
              <p>
                <b>University Name: </b>
                <a href={Texts.unilink1} target="_blank">
                  {Texts.uni1}
                </a>
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
                <a href={Texts.unilink2} target="_blank">
                  {Texts.uni2}
                </a>
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
