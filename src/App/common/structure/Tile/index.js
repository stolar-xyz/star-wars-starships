import {
  Name,
  Cost,
  ManufacturersList,
  StyledTile,
  Wrapper,
  Information,
} from './styled';
import AddToCart from '../AddToCart';

const Tile = ({ name, manufacturers, cost }) => (
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
      <AddToCart cost={cost} />
    </div>
  </StyledTile>
);

export default Tile;
