import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto auto;
  flex-wrap: wrap;
`;

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

export const HeadingMain = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 130%;
  letter-spacing: 0.03em;

  .blue {
    color: #b4e0e8;
  }
  > span {
    display: inline-block;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.2s forwards;
  }
  > span:nth-child(1) {
    animation-delay: 0s;
  }
  > span:nth-child(2) {
    animation-delay: 0.3s;
  }
  > span:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

export const HeadingElements = styled.div`
  display: flex;
  align-items: center;
`;

export const drawLine = keyframes`
    from {
        width: 0px;
        opacity: 0;
    } 
    to{
        width: 200px;
        opacity: 1;
    }
`;

export const Line = styled.div`
  height: 2px;
  background-color: gray;
  width: 0px;
  animation: ${drawLine} 1s forwards;
`;
