import styled, { css } from 'styled-components';

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.background.tertiaryBackground};
  box-shadow: ${({ loadButton, theme }) =>
    !loadButton && `0px 2px 12px ${theme.color.element.buttonBoxShadow}`};
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  ${({ loadButton }) =>
    loadButton &&
    css`
      display: block;
      margin: 0 auto;
      min-width: 25%;
      padding: 8px 22px;
      border-radius: 5px;
    `}

  &:disabled {
    cursor: unset;
    background: ${({ theme }) => theme.color.background.disabledBackground};
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: unset;
  }
`;

export default Button;
