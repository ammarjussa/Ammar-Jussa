import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5%;

  @media screen and (max-width: 2000px) {
    div {
      flex-basis: 16%;
    }

		@media screen and (max-width: 1000px) {
    div {
      flex-basis: 33%;
    }

    @media screen and (max-width: 600px) {
      div {
        flex-basis: 50%;
      }
    }

  }
`;

const Card = styled.div`
  padding: 5%;
  background-color: ${(props) => props.color || "lightgray"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  color: ${(props) => props.color || "white"}; ;
`;

const Skills = () => {
  return (
    <Container>
      <Card color="#223">
        <Text>HTML</Text>
      </Card>
      <Card color="#778">
        <Text>HTML</Text>
      </Card>
      <Card color="#f8f9fa">
        <Text color="black">HTML</Text>
      </Card>
      <Card color="#fff">
        <Text color="black">HTML</Text>
      </Card>
      <Card color="#778">
        <Text>HTML</Text>
      </Card>
      <Card color="#223">
        <Text>HTML</Text>
      </Card>
      <Card color="#f8f9fa">
        <Text color="black">HTML</Text>
      </Card>
      <Card color="#223">
        <Text>HTML</Text>
      </Card>
      <Card color="#778">
        <Text>HTML</Text>
      </Card>
      <Card color="#f8f9fa">
        <Text color="black">HTML</Text>
      </Card>
      <Card color="#223">
        <Text>HTML</Text>
      </Card>
      <Card color="#fff">
        <Text color="black">HTML</Text>
      </Card>
    </Container>
  );
};

export default Skills;
