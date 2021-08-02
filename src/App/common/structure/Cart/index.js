import { useEffect, useState } from 'react';
import { useReactiveVar } from '@apollo/client';
import { totalItemsVar } from '../../../reactiveVariables';
import { ItemsCounter, StyledCart, Wrapper } from './styled';
import cart from '../../../assets/svgs/cart.svg';

const Cart = () => {
  const count = useReactiveVar(totalItemsVar);
  const [scrollCart, setScrollCart] = useState(false);

  const changeScrollCart = () => {
    window.scrollY >= 80 ? setScrollCart(true) : setScrollCart(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScrollCart);
  }, []);

  return (
    <Wrapper scrollCart={scrollCart}>
      <StyledCart alt='Shopping cart' src={cart} />
      {count >= 1 && (
        <ItemsCounter scrollCart={scrollCart}>
          {count > 99 ? '+99' : count}
        </ItemsCounter>
      )}
    </Wrapper>
  );
};

export default Cart;
