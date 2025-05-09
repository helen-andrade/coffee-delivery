import React, { useState } from "react";
import { CartShopping } from "../../components/CartShopping";
import { useCart } from "../../hooks/useCart";
import {
  CoffeeImg,
  Container,
  Description,
  Price,
  Tags,
  Title,
} from "./styles";

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CardProps {
  coffee: Coffee;
}

export const Card: React.FC<CardProps> = ({ coffee }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addCoffeeToCart } = useCart();
  const handleAddToCart = () => {
    const coffeeToAdd = {
      id: Number(coffee.id),
      name: coffee.title,
      price: coffee.price,
      quantity: quantity,
      image: coffee.image,
      title: coffee.title,
    };

    addCoffeeToCart(coffeeToAdd, quantity);

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Title>
        <h2>{coffee.title}</h2>
      </Title>
      <Description>
        <span>{coffee.description}</span>
      </Description>
      <Price>
        <span>R$</span>
        <span>{coffee.price.toFixed(2)}</span>
      </Price>
      <CartShopping
        quantity={quantity}
        increment={() => setQuantity((prev) => prev + 1)}
        decrement={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
        onAddToCart={handleAddToCart}
        isAdded={isAdded}
      />
    </Container>
  );
};
