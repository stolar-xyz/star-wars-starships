import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-gap: 26px;
  justify-content: center;
  margin: 32px 0;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fill, 350px);

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    grid-template-columns: repeat(auto-fill, 325px);
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    grid-template-columns: repeat(auto-fill, 275px);
    grid-gap: 18px;
  }
`;

export default List;
