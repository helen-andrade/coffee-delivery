import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`;

export const Title = styled.h2`
  margin-top: 16px;

  color: ${({ theme }) => theme.colors["base-subtitle"]};
  ${mixins.fonts.titleS}
`;
export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`;
export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${({ theme }) => theme.colors["base-label"]};
  ${mixins.fonts.textS}
`;
export const Price = styled.span`
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-top: 25px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;
