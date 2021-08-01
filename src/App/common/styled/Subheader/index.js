import styled from 'styled-components';

const Subheader = styled.h2`
  color: ${({ theme }) => theme.color.text.primaryText};
  font-size: 46px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 32px;
  }
`;

export default Subheader;
