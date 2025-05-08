import { ShoppingCart, Check } from "phosphor-react";
import {
  ButtonDecrement,
  ButtonIncrement,
  Cart,
  Container,
  Wrapper,
} from "./styles";

interface CartShoppingProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  onAddToCart: () => void;
  isAdded: boolean;
}

export function CartShopping({
  quantity,
  increment,
  decrement,
  onAddToCart,
  isAdded,
}: CartShoppingProps) {
  return (
    <Wrapper>
      <Container>
        <div>
          <ButtonDecrement onClick={decrement}>
            <img src="../../../public/images/decrement.svg" alt="Diminuir" />
          </ButtonDecrement>

          <span>{quantity}</span>

          <ButtonIncrement onClick={increment}>
            <img src="../../../public/images/increment.svg" alt="Aumentar" />
          </ButtonIncrement>
        </div>
      </Container>

      <Cart>
        <button onClick={onAddToCart}>
          {isAdded ? (
            <Check size={22} weight="bold" />
          ) : (
            <ShoppingCart size={22} weight="fill" />
          )}
        </button>
      </Cart>
    </Wrapper>
  );
}
