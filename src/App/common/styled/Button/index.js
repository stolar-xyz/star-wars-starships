import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.background.tertiaryBackground};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.color.element.buttonBoxShadow};
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

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
