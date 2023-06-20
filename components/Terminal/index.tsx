import {
  TerminalBody,
  TerminalContainer,
  TerminalTitleBar,
  Container,
  CodeColor,
  Dot,
} from "./styles";

const Terminal = () => {
  return (
    <div>
      <TerminalContainer>
        <TerminalTitleBar>
          <Dot color="red"></Dot>
          <Dot color="yellow"></Dot>
          <Dot color="green"></Dot>
        </TerminalTitleBar>
        <TerminalBody>
          <Container>
            <CodeColor color="#d270eb">const</CodeColor>{" "}
            <CodeColor color="#70a5eb">me</CodeColor> = &#123; <br />
            &emsp;&emsp;&emsp;<CodeColor color="#d270eb">name</CodeColor>:{" "}
            <CodeColor color="#74eb70">'Ammar Jussa'</CodeColor>, <br />
            &emsp;&emsp;&emsp;<CodeColor color="#d270eb">age</CodeColor>:{" "}
            <CodeColor color="#74eb70">26</CodeColor>,<br />
            &emsp;&emsp;&emsp;<CodeColor color="#d270eb">role</CodeColor>:{" "}
            <CodeColor color="#74eb70">'Software Engineer'</CodeColor>,<br />
            &emsp;&emsp;&emsp;<CodeColor color="#d270eb">
              github
            </CodeColor>:{" "}
            <CodeColor>
              '
              <a
                className="link"
                target="_blank"
                href="https://github.com/ammarjussa"
              >
                https://github.com/ammarjussa
              </a>
              '
            </CodeColor>
            , <br />
            &emsp;&emsp;&emsp;<CodeColor color="#d270eb">langs</CodeColor>: ['
            <CodeColor color="#74eb70">JavaScript</CodeColor>', '
            <CodeColor color="#74eb70">Python</CodeColor>', '
            <CodeColor color="#74eb70">C++</CodeColor>'] <br /> &#125;; <br />
            <br />
            <CodeColor color="#d270eb">if</CodeColor> (
            <CodeColor color="#70a5eb">me</CodeColor>.
            <CodeColor color="#70a5eb">langs</CodeColor>.
            <CodeColor color="#e69941">includes</CodeColor>('
            <CodeColor color="#74eb70">JavaScript</CodeColor>')) &#123;
            <br />
            &emsp;&emsp; <CodeColor color="#70a5eb">console.log</CodeColor>(
            <CodeColor color="#74eb70">'I am Awesome!'</CodeColor>); <br />{" "}
            &#125;
          </Container>
        </TerminalBody>
      </TerminalContainer>
    </div>
  );
};

export default Terminal;
