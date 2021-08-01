import styled from 'styled-components';
import Button from '../../styled/Button';

export const StyledTile = styled.li`
  background: ${({ theme }) => theme.color.background.primaryBackground};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  min-height: 425px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    min-height: 350px;
  }
`;

export const Name = styled.h3`
  font-size: 32px;
  margin: 16px 0 32px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 28px;
    margin: 12px 0 26px;
  }
`;

export const Information = styled.h4`
  font-weight: 400;
  font-size: 20px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 18px;
  }
`;

export const ManufacturersList = styled.ul`
  font-size: 18px;
  padding: 0;
  list-style: inside;

  & > li::marker {
    color: ${({ theme }) => theme.color.element.listBullet};
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Cost = styled.span`
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  margin: 32px 0;
  text-align: center;
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
