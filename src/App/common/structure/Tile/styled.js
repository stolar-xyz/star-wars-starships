import styled from 'styled-components';

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
