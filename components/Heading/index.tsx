import { HeadingElements, Line, HeadingMain, Container } from "./styles";

const Heading: React.FC = () => {
  return (
    <Container>
      <HeadingElements>
        <Line />
      </HeadingElements>
      <HeadingMain>
        <span>Hi there, I’m Ammar.</span>
        <br />
        <span>
          Full Stack <span className="blue">Developer</span> <br />
        </span>
        <span>and Blockchain Enthusiast.</span>
      </HeadingMain>
    </Container>
  );
};

export default Heading;
