import Terminal from "../Terminal";
import {
  Container,
  SmallHeading,
  LargeHeading,
  HeadingContainer,
  Description,
  StyledSubmit,
} from "./styles";

const Heading: React.FC = () => {
  return (
    <Container>
      <HeadingContainer>
        <SmallHeading>HI, I'M</SmallHeading>
        <LargeHeading>AMMAR JUSSA</LargeHeading>
        <Description>
          FULL STACK DEVELOPER AND BLOCKCHAIN ENTHUSIAST
        </Description>
        <StyledSubmit onClick={() => (window.location.href = "#projects")}>
          View My Work
        </StyledSubmit>
      </HeadingContainer>
      <Terminal />
    </Container>
  );
};

export default Heading;
