import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${({ theme }) => theme.colors["purple-light"]};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }

    padding: 10px 8px;
    border-radius: 6px;
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors["yellow-light"]};
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    }
    .cart-icon {
      position: relative;
    }

    .cart-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
      color: white;
      font-size: 12px;
      font-weight: bold;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
