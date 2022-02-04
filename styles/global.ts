import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
	html,
	body {
		max-width: 100%;
    overflow-x: hidden;
		margin: 0;
		font-family: arial;
		background-color: ${({ theme }) => theme.colors.primary};
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
		color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
	}

	h3 {
		font-size: 33px;
		letter-spacing: 0.03em;
		color: ${({ theme }) => theme.colors.secondary};
	}

	p {
		margin: 50px 0;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
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

		@media(max-width: 500px) {
			font-size:15px;
		}

	}
`;

export default GlobalStyle;
