import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: ${({ scrollCart }) => (scrollCart ? 'fixed' : 'absolute')};
  right: ${({ scrollCart }) => (scrollCart ? '40px' : '25px')};
  transition: ${({ scrollCart }) =>
    scrollCart
      ? ' background-color 0.5s, right 0.5s, box-shadow 0.5s'
      : 'right 0.5s'};

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    right: 15px;
  }

  ${({ scrollCart }) =>
    scrollCart &&
    css`
      box-shadow: 0px 0px 5px ${({ theme }) => theme.color.element.cartBoxShadow};
      bottom: 40px;
      width: 80px;
      height: 80px;
      display: grid;
      place-items: center;
      background: ${({ theme }) => theme.color.background.primaryBackground};
      border-radius: 10px;
      z-index: 1;

      @media (max-width: ${({ theme }) => theme.tabletMax}px) {
        bottom: 15px;
      }

      @media (max-width: ${({ theme }) => theme.mobileMax}px) {
        width: 65px;
        height: 65px;
      }
    `}
`;

export const StyledCart = styled.img`
  width: 52px;
  height: 52px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: 40px;
    height: 40px;
  }
`;

export const ItemsCounter = styled.span`
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.color.background.tertiaryBackground};
  color: ${({ theme }) => theme.color.text.secondaryText};
  border-radius: 50%;
  width: 23px;
  height: 23px;
  position: absolute;
  top: ${({ scrollCart }) => (scrollCart ? '45px' : '30px')};
  right: ${({ scrollCart }) => (scrollCart ? '40px' : '25px')};
  font-size: 12px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 10px;
    width: 20px;
    height: 20px;
    top: ${({ scrollCart }) => (scrollCart ? '35px' : '20px')};
    right: ${({ scrollCart }) => (scrollCart ? '30px' : '20px')};
  }
`;
