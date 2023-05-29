import styled, { css } from "styled-components";

export const SliderContainer = styled.div`
  /* margin-left: 7rem;
   margin-right:29rem ; */
  position: relative;
  background: conic-gradient(#00966b 90deg 15deg);
  overflow: hidden;
  width: 100%;

  height: ${(props) => props.height || "25px"};
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const SliderItem = styled.div`
  position: relative;
  height: 250px;
  width: ${(props) => props.width + "px" || "100%"};
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.ul`
  position: absolute;
  bottom: 10px;
  margin-left: 1.8vw;
  left: 0vw;
  display: flex;
  @media (max-width: 500px) {
    margin-left: 2.5vw;
  }
`;

export const NavigationItem = styled.li`
  list-style: none;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: #ffffff;
  border-radius: 100%;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 10px;
    height: 10px;
  }

  ${(props) =>
    props.active &&
    css`
      background: var(--dark-color);
      transform: scale(1.5);
    `};
`;

export const Control = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
`;

export const ControlLeft = styled(Control)`
  left: 0;
`;
export const ControlRight = styled(Control)`
  right: 0;
`;

export const BigElement = styled.div`
  min-height: 1000px;
  background: #61dafb;
  width: 30px;
`;
