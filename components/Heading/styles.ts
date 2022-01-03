import styled, { keyframes } from "styled-components";

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
  justify-content: space-between;
  animation: ${Float} 1s 0.2s forwards;
`;

export const HeadingContainer = styled.div`
  width: 50%;
`;

export const SmallHeading = styled.h1`
  font-size: 30px;
  font-family: arial;
`;

export const LargeHeading = styled.h1`
  font-size: 80px;
  font-family: arial;
`;

export const Description = styled.h1`
  font-size: 30px;
`;
