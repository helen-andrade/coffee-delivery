import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const ContainerDelivery = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  span {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    ${mixins.fonts.textL}
    display: block;
    margin-top: 8px;
  }

  .img img {
    width: 492px;
    height: auto;
    margin-top: 100px;
    margin-left: 70px;
  }
`;

export const GradientBorderWrapper = styled.div`
  background: linear-gradient(90deg, #dbac2c, #8047f8);
  padding: 1px;
  border-radius: 6px 36px;
  width: fit-content;
  margin-top: 30px;
`;

export const InfoDelivery = styled.div`
  background: white;
  border-radius: 6px 36px;
  padding: 40px;
  width: 526px;
  height: 296px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .info-item {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
