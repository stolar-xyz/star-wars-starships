import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  max-width: 1368px;
  position: relative;
  border-bottom: 1px solid #cccccc;
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 25px;
  cursor: pointer;
`;

export const ItemsCounter = styled.span`
  display: grid;
  place-items: center;
  background: #ffc500;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  position: absolute;
  top: 30px;
  right: 25px;
  font-size: 12px;
  font-weight: 700;
`;
