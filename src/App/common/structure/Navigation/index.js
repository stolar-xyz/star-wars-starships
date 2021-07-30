import { Heading, ItemsCounter, StyledNavigation, Wrapper } from './styled';
import starWarsLogo from '../../../assets/svgs/starWarsLogo.svg';
import shoppingCart from '../../../assets/svgs/shoppingCart.svg';

const Navigation = ({ count }) => (
  <StyledNavigation>
    <header>
      <Heading>
        <img alt='Star Wars' src={starWarsLogo} width='160' height='80' />
      </Heading>
    </header>
    <Wrapper>
      <img alt='Shopping cart' src={shoppingCart} width='52' height='52' />
      {count && <ItemsCounter>{count > 10 ? '+10' : count}</ItemsCounter>}
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
