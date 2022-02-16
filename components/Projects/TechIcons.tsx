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
      {tech.map((t, i) => {
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
        else return null;
      })}
    </Container>
  );
};

export default TechIcons;