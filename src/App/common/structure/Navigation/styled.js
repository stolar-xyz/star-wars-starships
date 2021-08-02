import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  max-width: 1368px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.color.element.navigationBorder};
  color: ${({ theme }) => theme.color.text.primaryText};
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const Logo = styled.img`
  width: 160px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: 140px;
    height: 60px;
  }
`;
