import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { Aside, HeaderContainer } from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, coffee) => {
    return total + coffee.quantity;
  }, 0);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="../../../public/images/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside className="aside">
        <div>
          <MapPin className="mapPin" size={22} weight="fill" />
          <span>Brasília, DF</span>
        </div>

        <Link to="/Order" className="cart-icon">
          <ShoppingCart size={22} weight="fill" />
          {totalQuantity > 0 && (
            <span className="cart-badge">{totalQuantity}</span>
          )}
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
