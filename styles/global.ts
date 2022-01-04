import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
	html,
	body {
		margin: 0;
		font-family: arial;
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
    font-weight: 900;
    font-size: 33px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    transform: translateY(30px);
    opacity: 1;
	}

	p {
		margin: 50px 0;
    color: #7b7b7b;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    a {
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      :hover {
        border-bottom: 2px solid black;
      }
    }
		opacity: 1;

	}
`;

export default GlobalStyle;
