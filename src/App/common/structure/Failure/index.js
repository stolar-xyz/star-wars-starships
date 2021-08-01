import Subheader from '../../styled/Subheader';
import { DarthVaderIcon, Description, Container } from './styled';

const Failure = () => (
  <Container>
    <DarthVaderIcon />
    <Subheader>Ooops! Something went wrong...</Subheader>
    <Description>
      Please check your network connection
      <br /> and try again
    </Description>
  </Container>
);

export default Failure;
