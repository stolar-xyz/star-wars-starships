import { useState } from 'react';
import {
  AddCartButton,
  Name,
  Cost,
  ManufacturersList,
  StyledTile,
  Count,
  CountButton,
  CountButtons,
  Wrapper,
  Information,
} from './styled';

const Tile = ({ name, manufacturers, cost }) => {
  const [quantity, setQuantity] = useState(1);

  const onFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <StyledTile>
      <div>
        <Name>{name}</Name>
        {manufacturers && (
          <>
            <Information>Manufacturers</Information>
            <ManufacturersList>
              {manufacturers.map(manufacturer => (
                <li key={manufacturer}>{manufacturer}</li>
              ))}
            </ManufacturersList>
          </>
        )}
      </div>
      <div>
        <Wrapper>
          {cost ? (
            <>
              <Information>Cost</Information>
              <Cost>{cost}</Cost>
            </>
          ) : (
            <Information>Unavailable</Information>
          )}
        </Wrapper>
        <form onSubmit={onFormSubmit}>
          <CountButtons>
            <CountButton title='Decrease'>-</CountButton>
            <Count
              type='number'
              min='1'
              placeholder='Quantity'
              value={quantity}
              onChange={({ target }) => {
                setQuantity(target.value);
              }}
            />
            <CountButton title='Increase'>+</CountButton>
          </CountButtons>
          <AddCartButton title='Add to shopping cart' disabled={!cost}>
            Add to cart
          </AddCartButton>
        </form>
      </div>
    </StyledTile>
  );
};

export default Tile;
