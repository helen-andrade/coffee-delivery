import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.header`
  display: flex;
  align-items: center;
  height: 34rem;
  background: url("../../../public/images/hero-bg.svg");
  background-size: cover;
  position: relative;

  img {
    position: absolute;
    bottom: 100px;
    right: 200px;
    width: 476px;
    margin-right: 180px;
  }

  h1 {
    color: ${({ theme }) => theme.colors["base-title"]};
    text-align: left;
    font-size: 2.5rem;
  }

  span {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    text-align: left;
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;

export const CoffeeInfo = styled.div`
  padding: 0 20rem;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors["base-title"]}
  }

  > span {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    max-width: 588px;
    margin-bottom: 40px;
  }
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`;

export const CoffeeList = styled.div`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    margin-left: 40px;
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
    padding: 30px;
  }
`;
