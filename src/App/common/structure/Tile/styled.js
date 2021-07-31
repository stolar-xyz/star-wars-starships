import styled from 'styled-components';
import Button from '../../styled/Button';

export const StyledTile = styled.li`
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  min-height: 400px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Name = styled.h3`
  font-size: 32px;
  margin: 16px 0 32px;
`;

export const Information = styled.h4`
  font-weight: 400;
  font-size: 20px;
  margin: 0;
`;

export const ManufacturersList = styled.ul`
  font-size: 18px;
  padding: 0;
  list-style: inside;

  & > li::marker {
    color: #ff9f00;
  }
`;

export const Cost = styled.span`
  font-size: 24px;
`;

export const Wrapper = styled.div`
  margin-bottom: 32px;
`;

export const CountButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
`;

export const CountButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-weight: 700;

  &:disabled {
    cursor: unset;
    background: #cdcdcd;
  }
`;

export const Count = styled.input`
  width: 80px;
  border: 1px solid #808080;
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
