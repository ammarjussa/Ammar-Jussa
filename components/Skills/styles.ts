import styled from "styled-components";
import css from "@styled-system/css";

export const Card = styled.div`
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.12);

  width: 100%;
  padding: 0 1.5rem;
  padding-top: 1.2rem;
  padding-bottom: 0.3rem;
  text-align: center;
  transition: all 0.3s ease;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: normal;
  cursor: pointer;

  ${css({
    bg: "form",
    mx: [null, null, null, null, null, 3],
    my: 3,
  })}

  &:hover {
    box-shadow: 0px 1px 15px gray;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 700;
  ${css({
    color: "secondary",
  })}
`;

export const Tags = styled.div`
  width: 100%;
  ${css({
    px: 2,
    py: 3,
  })}
`;

export const Tag = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: #31353b;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
  background-color: #d6dce2;
  font-weight: 600;
  letter-spacing: 0.7px;

  ${css({})}
`;
