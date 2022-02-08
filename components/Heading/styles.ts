import styled, { keyframes } from "styled-components";
import css from "@styled-system/css";

export const Float = keyframes`
	from {
		transform: translateY(40px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  animation: ${Float} 1s 0.2s forwards;
	margin-top: 5%;

  ${css({
    flexDirection: ["column", null, null, null, null, "row"],
    justifyContent: ["center", null, null, null, null, "space-between"],
  })}
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallHeading = styled.h1`
  font-family: arial;

  ${css({
    fontSize: ["25px", null, null, null, null, "30px"],
  })}
`;

export const LargeHeading = styled.h1`
  font-size: 80px;
  font-family: arial;
  ${css({
    fontSize: ["50px", null, null, null, null, "80px"],
  })}
`;

export const Description = styled.h1`
  ${css({
    fontSize: ["20px", null, null, null, null, "25px"],
  })}
`;
