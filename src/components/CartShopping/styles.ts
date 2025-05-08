import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: -2rem;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["purple-dark"]};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 38px;
  padding: 8px;
  border-radius: 6px;

  span {
    padding: 9px;
  }
`;

export const ButtonDecrement = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ButtonIncrement = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Cart = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 38px;

    color: ${({ theme }) => theme.colors["white"]};
    background-color: ${({ theme }) => theme.colors["purple-dark"]};

    padding: 8px;
    border-radius: 6px;
    position: relative;

    &:hover {
      background-color: ${({ theme }) => theme.colors["purple"]};
      transition: background-color 0.2s;
    }

    &[aria-disabled="true"] {
      pointer-events: none;
    }
  }
`;
