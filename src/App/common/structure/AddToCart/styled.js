import styled from 'styled-components';
import Button from '../../styled/Button';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
`;

export const CountButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: 35px;
    height: 35px;
  }
`;

export const Count = styled.input`
  width: 80px;
  border: 1px solid ${({ theme }) => theme.color.element.inputBorder};
  border-radius: 5px;
  text-align: center;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }
`;

export const AddCartButton = styled(Button)`
  padding: 8px 16px;
  border-radius: 5px;
  width: 100%;
`;
