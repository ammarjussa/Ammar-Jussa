import styled from "styled-components";
import css from "@styled-system/css";

export const Container = styled.div`
  padding-top: 10%;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyTitle = styled.h1`
  text-align: center;
  ${css({
    fontSize: ["35px", null, null, "50px"],
    mt: ["10%", null, null, "10%"],
  })}
`;

export const TextFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContent = styled.div`
  p {
    margin: 0;
    ${css({
      mt: 3,
      width: ["90vw", null, null, "80vw"],
      textAlign: ["center", null, null, null, null, null, null, null, "left"],
    })}
  }

  ${css({
    justifyContent: ["center", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    maxWidth: ["90vw", null, null, "80vw"],
  })}
`;

export const EducationFlex = styled.div`
  display: flex;

  ${css({
    justifyContent: ["center", null, null, "space-around"],
    flexDirection: ["column", null, null, "row"],
    mt: [0, null, null, null, null, null, null, null, 4],
    // maxWidth: ["90vw", null, null, "90vw"],
  })}
`;

export const EduFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const EducationLogo = styled.img`
  margin-bottom: 20px;
  ${css({
    width: "150px",
    height: "150px",
  })}
`;

export const EducationContent = styled.div`
  p {
    margin: 0px;
    ${css({
      width: ["90vw", null, null, "32vw"],
      textAlign: ["center", null, null, "left"],
    })}

    a {
      color: ${({ theme }) => theme.colors.text};

      &:hover {
        text-decoration: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export const MyImage = styled.img`
  height: 20%;
  border-radius: 3%;
  box-shadow: 5px 5px 2px;

  ${css({
    width: ["90vw", null, null, "80vw"],
  })}
`;
