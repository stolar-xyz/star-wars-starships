import styled, { keyframes } from 'styled-components';

export const StyledLoading = styled.div`
  display: grid;
  place-items: center;
  height: 65vh;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  border: 5px solid;
  border-color: #fcd420 transparent;
  animation: ${spin} 1s ease-in-out infinite;
`;
