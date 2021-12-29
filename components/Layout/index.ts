import styled, { keyframes } from "styled-components";
import css from "@styled-system/css";

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Layout = styled.div`
  min-height: 100vh;
  opacity: 0;
	animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;
	margin-left: 20px;
	max-width: 75vw;
	a {
		text-decoration: none;
		color: black;
	}
	
 
`;

export default Layout;
