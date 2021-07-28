import { Heading, ItemsCounter, StyledNavigation, Wrapper } from './styled';
import starWarsLogo from '../../../assets/svgs/starWarsLogo.svg';
import shoppingCart from '../../../assets/svgs/shoppingCart.svg';

const Navigation = ({ count }) => (
  <StyledNavigation>
    <header>
      <Heading>
        <img alt='Star Wars' src={starWarsLogo} />
      </Heading>
    </header>
    <Wrapper>
      <img alt='Shopping cart' src={shoppingCart} />
      {count && <ItemsCounter>{count > 10 ? '+10' : count}</ItemsCounter>}
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
