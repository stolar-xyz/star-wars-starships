const Tile = () => {
  return (
    <div>
      <div>
        <h3>Millennium Falcon</h3>
        <h4>Manufacturers</h4>
        <ul>
          <li>Imperial Department of Military</li>
        </ul>
      </div>
      <div>
        <div>
          <h4>Price</h4>
          <span>100.000.000.000</span>
        </div>
        <form>
          <div>
            <button title='Decrease'>-</button>
            <input type='number' min='1' placeholder='Quantity' />
            <button title='Increase'>+</button>
          </div>
          <button title='Add to shopping cart'>Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default Tile;
