import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-gap: 26px;
  justify-content: center;
  margin: 32px 0;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fill, 350px);
`;

export default List;
