import { ReactNode, createContext, useState, useEffect } from "react";

interface Coffee {
  title: string | undefined;
  image: string | undefined;
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: Coffee[];
  addCoffeeToCart: (coffee: Coffee, quantity: number) => void;
  removeCoffeeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeCoffee: (id: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storedCart = localStorage.getItem("@coffeDelivery:cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("@coffeDelivery:cart", JSON.stringify(cart));
  }, [cart]);

  function addCoffeeToCart(coffee: Coffee, quantity: number) {
    const coffeeAlreadyInCart = cart.find((item) => item.id === coffee.id);

    if (coffeeAlreadyInCart) {
      const updatedCart = cart.map((item) =>
        item.id === coffee.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prev) => [
        ...prev,
        {
          ...coffee,
          image: coffee.image?.replace("/images/coffees/", ""), 
          quantity,
        },
      ]);
    }
  }

  function removeCoffeeFromCart(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function increaseQuantity(id: number) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  function decreaseQuantity(id: number) {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  const incrementQuantity = increaseQuantity;
  const decrementQuantity = decreaseQuantity;
  const removeCoffee = removeCoffeeFromCart;

  return (
    <CartContext.Provider
      value={{
        cart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        incrementQuantity,
        decrementQuantity,
        removeCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
