import { useEffect, useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { totalItemsVar } from '../../../reactiveVariables';
import {
  Heading,
  ItemsCounter,
  Logo,
  ShoppingCart,
  StyledNavigation,
  Wrapper,
} from './styled';
import starWarsLogo from '../../../assets/svgs/starWarsLogo.svg';
import shoppingCart from '../../../assets/svgs/shoppingCart.svg';

const Navigation = () => {
  const count = useReactiveVar(totalItemsVar);
  const [scrollCart, setScrollCart] = useState(false);

  const changeScrollCart = () => {
    window.scrollY >= 80 ? setScrollCart(true) : setScrollCart(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScrollCart);
  }, []);

  return (
    <StyledNavigation>
      <header>
        <Heading>
          <Logo alt='Star Wars' src={starWarsLogo} />
        </Heading>
      </header>
      <Wrapper scrollCart={scrollCart}>
        <ShoppingCart alt='Shopping cart' src={shoppingCart} />
        {count >= 1 && (
          <ItemsCounter scrollCart={scrollCart}>
            {count > 99 ? '+99' : count}
          </ItemsCounter>
        )}
      </Wrapper>
    </StyledNavigation>
  );
};

export default Navigation;
