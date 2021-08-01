import styled from 'styled-components';
import { ReactComponent as DarthVader } from '../../../assets/svgs/darthVader.svg';

export const Container = styled.div`
  margin-top: 10%;
  text-align: center;
`;

export const DarthVaderIcon = styled(DarthVader)`
  margin-bottom: 24px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.text.primaryText};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
`;
