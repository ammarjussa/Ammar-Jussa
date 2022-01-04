import Terminal from "../Terminal";
import {
  Container,
  SmallHeading,
  LargeHeading,
  HeadingContainer,
  Description,
} from "./styles";

const Heading: React.FC = () => {
  return (
    <Container>
      <HeadingContainer>
        <SmallHeading>HI, I'M</SmallHeading>
        <LargeHeading>
          AMMAR <br /> JUSSA
        </LargeHeading>
        <Description>
          FULL STACK DEVELOPER AND BLOCKCHAIN ENTHUSIAST
        </Description>
      </HeadingContainer>
      <Terminal />
    </Container>
  );
};

export default Heading;
