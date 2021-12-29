import { createGlobalStyle, keyframes } from "styled-components";

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

const GlobalStyle = createGlobalStyle<{ theme: any }>`
	html,
	body {
		padding-left: 5%;
		padding-top: 5%;
		margin: 0;
		font-family: GothamPro, sans-serif;
		// background-color: ${(props) => props.theme.colors.background};
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	* {
		box-sizing: border-box;
	}

	h1 {
		width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    transform: translateY(30px);
    opacity: 0;
		animation: ${Float} 1s 0.2s forwards;

	}

	p {
		margin: 50px 0;
    color: #7b7b7b;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    a {
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      :hover {
        border-bottom: 2px solid black;
      }
    }
		opacity: 0;
		animation: ${Float} 1s 0.2s forwards;

	}
`;

export default GlobalStyle;
