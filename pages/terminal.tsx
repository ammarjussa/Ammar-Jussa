import styled from "styled-components";

const TerminalContainer = styled.div`
  float: center;
  width: 450px;
  height: 300px;
  border-radius: 10px;
  background-color: #21313c;
  overflow-y: hidden;
  font-family: monospace;
`;

const TerminalTitleBar = styled.div`
  padding-left: 10px;
  vertical-align: bottom;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0;
  height: 30px;
  background-color: #44525b;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-left: 5px;
  margin-top: 10px;
  cursor: pointer;
  display: inline-block;
  background-color: ${(props) =>
    props.color === "red"
      ? "#ff5952"
      : props.color === "yellow"
      ? "#e7bf2a"
      : "#54c22c"};
  &:hover {
    background-color: ${(props) =>
      props.color === "red"
        ? "#d44742"
        : props.color === "yellow"
        ? "#d1ac28"
        : "#48a826"};
  }
`;

const TerminalBody = styled.div`
  padding: 20px;
  color: #adb5b9;
  line-height: 1.1;

  a {
    color: #74eb70;

    &:hover {
      color: #5dbd5a;
    }
  }
`;

const Container = styled.div`
  overflow-x: hidden;
  line-height: 1.6;
`;

const CodeColor = styled.span`
  color: ${(props) => props.color};
`;

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
            <CodeColor color="#74eb70">24</CodeColor>,<br />
            &emsp;&emsp;&emsp;<CodeColor color="#d270eb">role</CodeColor>:{" "}
            <CodeColor color="#74eb70">'Software Engineer'</CodeColor>,<br />
            &emsp;&emsp;&emsp;<CodeColor color="#d270eb">
              github
            </CodeColor>:{" "}
            <CodeColor>
              '
              <a target="_blank" href="https://github.com/ammarjussa">
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
            <CodeColor color="#d270eb">if</CodeColor>&nbsp; (
            <CodeColor color="#70a5eb">me</CodeColor>.
            <CodeColor color="#70a5eb">langs</CodeColor>.
            <CodeColor color="#e69941">includes</CodeColor>('
            <CodeColor color="#74eb70">JavaScript</CodeColor>')) &#123;
            <br />
            &emsp;&emsp;&emsp; <CodeColor color="#70a5eb">console.log</CodeColor>(
            <CodeColor color="#74eb70">'I am Awesome!'</CodeColor>); <br /> &#125;
          </Container>
        </TerminalBody>
      </TerminalContainer>
    </div>
  );
};

export default Terminal;
