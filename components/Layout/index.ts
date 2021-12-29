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
	padding: 20px;
	animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;
	a {
		text-decoration: none;
		color: black;
	}
	${css({
    maxWidth: [null, null, null, "940px", null, null, null,null,"1200px"],
    mx: ["25px", null, null, "75px"],
    my: "auto",
  })}}
 
`;

export default Layout;
