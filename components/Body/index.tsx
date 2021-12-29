import styled from "styled-components";

const Container = styled.div`
  margin: 100px 0 200px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-items: start;
  margin: 0;
  justify-content: space-between;
`;

const TextContent = styled.div`
  width: 100%;
  max-width: 700px;
  p {
    margin: 40px 0px;
  }
  :nth-child(2) {
    p {
      margin: 40px 0px;
    }
  }
`;

const SkillTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    color: black;
    font-weight: 700;
    min-width: 200px;
    margin: 20px 0 0 0;

    span {
      font-size: 20px;
      margin-right: 5px;
      color: #b4e1e7;
    }
  }
`;

const Body: React.FC = () => {
  return (
    <Container>
      <TextContent>
        <p>
          I'm a 21-year-old student at Purdue University currently studying web
          development and design.
          <br />
          <br />
          As I've grown as a developer, I've worked alongside senior designers
          and developers who have raised my standards for whats expected of any
          web application.
        </p>
      </TextContent>
      <TextContent>
        <p>
          Through these experiences, I've had the opportunity to create
          memorable products that are not only enjoyable to use but are written
          in code that's maintainable and easy to understand.
        </p>
      </TextContent>

      <SkillTable>
        <row>
          <p>
            <span>&#9675;</span> Javascript ES6
          </p>
          <p>
            <span>&#9675;</span> HTML & CSS
          </p>
        </row>
        <row>
          <p>
            <span>&#9675;</span> React
          </p>
          <p>
            <span>&#9675;</span> SASS
          </p>
        </row>
        <row>
          <p>
            <span>&#9675;</span> React Native
          </p>
          <p>
            <span>&#9675;</span> Styled-Components
          </p>
        </row>
        <row>
          <p>
            <span>&#9675;</span> Git
          </p>
          <p>
            <span>&#9675;</span> PHP & SQL
          </p>
        </row>
      </SkillTable>
    </Container>
  );
};

export default Body;
