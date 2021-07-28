import starWarsLogo from '../../../assets/svgs/starWarsLogo.svg';
import shoppingCart from '../../../assets/svgs/shoppingCart.svg';

const Navigation = () => (
  <nav>
    <header>
      <h1>
        <img alt='Star Wars' src={starWarsLogo} />
      </h1>
    </header>
    <div>
      <img alt='Shopping cart' src={shoppingCart} />
      <span>1</span>
    </div>
  </nav>
);

export default Navigation;
