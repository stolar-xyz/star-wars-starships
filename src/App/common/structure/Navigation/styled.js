import styled, { css } from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  max-width: 1368px;
  position: relative;
  border-bottom: 1px solid #cccccc;
  color: #ffffff;
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const Wrapper = styled.div`
  position: ${({ scrollCart }) => (scrollCart ? 'fixed' : 'absolute')};
  right: ${({ scrollCart }) => (scrollCart ? '50px' : '25px')};
  transition: ${({ scrollCart }) =>
    scrollCart ? ' background-color 0.5s, right 0.5s' : 'right 0.5s'};
  cursor: pointer;

  ${({ scrollCart }) =>
    scrollCart &&
    css`
      box-shadow: 0px 0px 5px #888888;
      bottom: 50px;
      width: 80px;
      height: 80px;
      display: grid;
      place-items: center;
      background: #ffffff;
      border-radius: 10px;
      z-index: 1;
    `}
`;

export const ItemsCounter = styled.span`
  display: grid;
  place-items: center;
  background: #ffc500;
  color: #000000;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  position: absolute;
  top: ${({ scrollCart }) => (scrollCart ? '45px' : '30px')};
  right: ${({ scrollCart }) => (scrollCart ? '40px' : '25px')};
  font-size: 12px;
  font-weight: 700;
`;
