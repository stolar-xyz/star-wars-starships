import { Heading, ItemsCounter, StyledNavigation, Wrapper } from './styled';
import starWarsLogo from '../../../assets/svgs/starWarsLogo.svg';
import shoppingCart from '../../../assets/svgs/shoppingCart.svg';

const Navigation = () => (
  <StyledNavigation>
    <header>
      <Heading>
        <img alt='Star Wars' src={starWarsLogo} />
      </Heading>
    </header>
    <Wrapper>
      <img alt='Shopping cart' src={shoppingCart} />
      <ItemsCounter>1</ItemsCounter>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
