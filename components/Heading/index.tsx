import Terminal from "../Terminal";
import {
  Container,
  SmallHeading,
  LargeHeading,
  HeadingContainer,
  Description,
  StyledSubmit,
  ButtonContainer,
  DownloadButton,
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
        <ButtonContainer>
          <StyledSubmit onClick={() => (window.location.href = "#projects")}>
            View My Work
          </StyledSubmit>
          <DownloadButton href="/AmmarCV.docx" download>
            Download My CV
          </DownloadButton>
        </ButtonContainer>
      </HeadingContainer>
      <Terminal />
    </Container>
  );
};

export default Heading;
