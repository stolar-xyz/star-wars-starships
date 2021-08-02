import { useState } from 'react';
import { totalItemsVar } from '../../../reactiveVariables';
import { AddCartButton, Count, CountButton, Wrapper } from './styled';

const AddToCart = ({ cost }) => {
  const [quantity, setQuantity] = useState(1);

  const onFormSubmit = event => {
    event.preventDefault();
    totalItemsVar(totalItemsVar() + +quantity);
    setQuantity(1);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Wrapper>
        <CountButton
          type='button'
          title='Decrease'
          disabled={quantity <= 1}
          onClick={() => {
            setQuantity(+quantity - 1);
          }}
        >
          -
        </CountButton>
        <Count
          type='number'
          min='1'
          required
          placeholder='Quantity'
          value={quantity}
          onChange={({ target }) => {
            setQuantity(target.value);
          }}
        />
        <CountButton
          type='button'
          title='Increase'
          onClick={() => {
            setQuantity(+quantity + 1);
          }}
        >
          +
        </CountButton>
      </Wrapper>
      <AddCartButton title='Add to cart' disabled={!cost}>
        Add to cart
      </AddCartButton>
    </form>
  );
};

export default AddToCart;
