import Terminal from "../Terminal";
import { Container, SmallHeading, LargeHeading, HeadingContainer, Description } from "./styles";

const Heading: React.FC = () => {
  return (
    <Container>
      <HeadingContainer>
        <SmallHeading>HI, I'M</SmallHeading>
        <LargeHeading>
          AMMAR <br /> JUSSA
        </LargeHeading>
				<Description>
					Full Stack Developer and Blockchain Enthusiast
				</Description>
      </HeadingContainer>
      <Terminal />
    </Container>
  );
};

export default Heading;
