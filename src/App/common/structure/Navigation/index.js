import { Heading, Logo, StyledNavigation } from './styled';
import Cart from '../Cart';
import starWarsLogo from '../../../assets/svgs/starWarsLogo.svg';

const Navigation = () => (
  <StyledNavigation>
    <header>
      <Heading>
        <Logo alt='Star Wars' src={starWarsLogo} />
      </Heading>
    </header>
    <Cart />
  </StyledNavigation>
);

export default Navigation;
