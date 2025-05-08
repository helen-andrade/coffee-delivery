import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin-top: 100px;
  flex-wrap: wrap;
`;

export const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Form = styled.div`
  h2 {
    margin-bottom: 20px;
    ${mixins.fonts.titleS}
  }
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 20px;
  width: 640px;

  input {
    margin: 10px;
    width: 200px;
    color: ${({ theme }) => theme.colors["base-label"]};
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    border-radius: 4px;
    padding: 12px;
  }

  .road {
    width: 560px;
  }
  .complement {
    width: 340px;
  }
  .city {
    width: 260px;
  }
  .uf {
    width: 60px;
  }
`;

export const HeaderMapPin = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;

  img {
    margin-top: 5px;
  }

  span {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: 20px;
    margin-left: 10px;
  }

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 17px;
    margin-top: 5px;
  }
`;

export const Payment = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  width: 640px;
  padding: 40px;
  margin-top: 30px;

  img {
    margin-right: 10px;
    margin-bottom: -5px;
  }

  span {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    margin-top: 5px;
    margin-left: 36px;
  }
`;

export const ButtonPayment = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 30px 0;
  justify-content: flex-start;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors["base-text"]};
    width: 170px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    flex-shrink: 0;
    text-transform: uppercase;

    &:hover {
      background-color: ${({ theme }) => theme.colors["purple-light"]};
      color: ${({ theme }) => theme.colors["purple"]};
    }

    .iconPayment {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;

export const SelectedCoffees = styled.div`
  h2 {
    margin-bottom: 20px;
    ${mixins.fonts.titleS};
    text-align: left;
  }
`;
export const CoffeesSelected = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  width: 448px;
  padding: 40px;
  border-radius: 6px 36px;

  .confirm-button {
    background-color: ${({ theme }) => theme.colors["yellow"]};
    color: ${({ theme }) => theme.colors["white"]};
    border-radius: 6px;
    width: 100%;
    height: 46px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;

    &:hover {
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    }
  }
`;

export const CoffeeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding: 20px 0;

  img {
    width: 64px;
    height: 64px;
  }

  > span {
    font-weight: bold;
  }
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    margin-bottom: 4px;
  }
`;

export const CartActions = styled.div`
  display: flex;
  gap: 8px;

  > div,
  > button {
    height: 32px;
  }

  > button {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    border-radius: 6px;
    padding: 0 8px;
    border: none;
    cursor: pointer;
    ${mixins.fonts.textS};

    svg {
      color: ${({ theme }) => theme.colors["purple"]};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }
  }
`;

export const AddCoffee = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  width: 72px;
  height: 32px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 14px;
      height: 14px;
      margin: 5px;
    }
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors["base-title"]};
    min-width: 20px;
    text-align: center;
  }
`;

export const RemoveIten = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  border-radius: 6px;
  padding: 0 8px;
  border: none;
  cursor: pointer;
  ${mixins.fonts.textS};

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }
`;

export const PriceDetails = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;

  span,
  strong {
    font-size: 14px;
  }

  strong {
    font-weight: bold;
    font-size: 16px;
  }
`;
