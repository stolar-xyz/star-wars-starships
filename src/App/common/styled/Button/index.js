import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: #fcd420;
  color: #18181b;
  box-shadow: 0px 2px 12px #e4e6f0;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: unset;
  }
`;

export default Button;
