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
  margin-bottom: 5%;

  ${css({
    px: ["6%"],
    flexDirection: ["column", null, null, null, "row"],
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
    fontSize: ["40px", null, null, null, null, "60px"],
    my: ["20px"],
  })}
`;

export const Description = styled.h1`
  max-width: 40vw;
  ${css({
    fontSize: ["20px", null, null, null, null, "25px"],
    mb: ["10%", null, null, null, null, 0],
  })}
`;

export const StyledSubmit = styled.div`
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;
  ${css({
    width: ["300px"],
    py: "15px",
    mt: "40px",
  })};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
