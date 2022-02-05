import styled from "styled-components";
import css from "@styled-system/css";

export const TerminalContainer = styled.div`
  float: center;
  height: 350px;
  border-radius: 10px;
  overflow-y: hidden;
  font-family: monospace;

  ${css({
    bg: "terminal",
    width: ["90vw", null, null, null, null, null, null, "450px", "520px"],
    height: ["290px", null, null, null, null, "350px"],
  })}
`;

export const TerminalTitleBar = styled.div`
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

export const Dot = styled.div`
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

export const TerminalBody = styled.div`
  padding: 20px;
  color: #adb5b9;
  line-height: 1.1;

  .link {
    color: #74eb70;

    &:hover {
      color: #5dbd5a;
    }
  }
`;

export const Container = styled.div`
  overflow-x: hidden;
  line-height: 1.6;
  font-size: 15px;
`;

export const CodeColor = styled.span`
  color: ${(props) => props.color};
  font-weight: 600;
`;
