import styled from "styled-components";
import css from "@styled-system/css";
import ReactIcon from "../../public/react.svg";
import NextIcon from "../../public/nextjs.svg";
import NodeIcon from "../../public/nodejs.svg";
import MongoIcon from "../../public/mongodb.svg";
import MongoPlainIcon from "../../public/mongodbplain.svg";
import NodePlainIcon from "../../public/nodejsplain.svg";
import TypeIcon from "../../public/typescript.svg";
import FireIcon from "../../public/firebase-plain-wordmark.svg";
import GraphIcon from "../../public/graphql-plain-wordmark.svg";
import RustIcon from "../../public/rust.svg";
import StyledIcon from "../../public/styled-components.svg";
import StyledPlainIcon from "../../public/styled-components-plain.svg";
import CssIcon from "../../public/css.svg";
import TailwindIcon from "../../public/tailwindcss.svg";
import TailwindPlainIcon from "../../public/tailwindcssplain.svg";
import SolidityIcon from "../../public/solidity.svg";

import { LIGHT_THEME } from "../../constants";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    ${css({
      height: ["60px", null, null, "80px"],
      width: ["60px", null, null, "80px"],
      mx: ["10px", null, null, "20px"],
    })}
  }
`;

interface Props {
  tech: string[];
  theme: string;
}

const TechIcons: React.FC<Props> = ({ tech, theme }) => {
  return (
    <Container>
      {tech.map((t: string, i: number) => {
        if (t === "React")
          return theme === LIGHT_THEME ? (
            <ReactIcon fill="#00d1f7" key={i} />
          ) : (
            <ReactIcon fill="#fff" key={i} />
          );
        else if (t === "NextJS")
          return theme === LIGHT_THEME ? (
            <NextIcon key={i} />
          ) : (
            <NextIcon fill="#fff" key={i} />
          );
        else if (t === "TypeScript")
          return theme === LIGHT_THEME ? (
            <TypeIcon fill="#007acc" key={i} />
          ) : (
            <TypeIcon fill="#fff" key={i} />
          );
        else if (t === "NodeJS")
          return theme === LIGHT_THEME ? (
            <NodeIcon key={i} />
          ) : (
            <NodePlainIcon fill="#fff" key={i} />
          );
        else if (t === "MongoDB")
          return theme === LIGHT_THEME ? (
            <MongoIcon key={i} />
          ) : (
            <MongoPlainIcon key={i} fill="#fff" />
          );
        else if (t === "Firebase")
          return theme === LIGHT_THEME ? (
            <FireIcon key={i} fill="#f58220" />
          ) : (
            <FireIcon key={i} fill="#fff" />
          );
        else if (t === "GraphQL")
          return theme === LIGHT_THEME ? (
            <GraphIcon key={i} fill="#E434AA" />
          ) : (
            <GraphIcon key={i} fill="#fff" />
          );
        else if (t === "Rust")
          return theme === LIGHT_THEME ? (
            <RustIcon key={i} />
          ) : (
            <RustIcon key={i} fill="#fff" />
          );
        else if (t === "Styled-Components")
          return theme === LIGHT_THEME ? (
            <StyledIcon transform="scale(1.3)" key={i} />
          ) : (
            <StyledPlainIcon transform="scale(1.3)" key={i} />
          );
        else if (t === "Tailwind")
          return theme === LIGHT_THEME ? (
            <TailwindIcon transform="scale(1.4)" key={i} />
          ) : (
            <TailwindPlainIcon key={i} transform="scale(1.4)" fill="#fff" />
          );
        else if (t === "CSS")
          return theme === LIGHT_THEME ? (
            <CssIcon key={i} />
          ) : (
            <CssIcon key={i} />
          );
        else if (t === "Solidity")
          return theme === LIGHT_THEME ? (
            <SolidityIcon key={i} />
          ) : (
            <SolidityIcon fill="#fff" key={i} />
          );
        else return null;
      })}
    </Container>
  );
};

export default TechIcons;
