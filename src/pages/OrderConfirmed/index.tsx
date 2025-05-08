import { useLocation } from "react-router-dom";
import {
  ContainerDelivery,
  GradientBorderWrapper,
  InfoDelivery,
} from "./styles";

export function OrderConfirmed() {
  const { state } = useLocation() as {
    state: {
      road: string;
      number: string;
      neighborhood: string;
      city: string;
      uf: string;
      paymentMethod: string;
    };
  };

  return (
    <ContainerDelivery>
      <div className="content">
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
          <GradientBorderWrapper>
            <InfoDelivery>
              <div className="info-item">
                <img src="../../../public/images/location.svg" />
                <p>
                  Entrega em{" "}
                  <strong>
                    {state.road}, {state.number}
                  </strong>{" "}
                  <br />
                  {state.neighborhood} - {state.city}, {state.uf}
                </p>
              </div>
              <div className="info-item">
                <img src="../../../public/images/clock.svg" />
                <p>
                  Previsão de entrega <br /> <strong>20 min - 30 min</strong>
                </p>
              </div>
              <div className="info-item">
                <img src="../../../public/images/dollar-sign.svg" />
                <p>
                  Pagamento na entrega <br /> <strong>{state.paymentMethod}</strong>
                </p>
              </div>
            </InfoDelivery>
          </GradientBorderWrapper>
        </div>

        <div className="img">
          <img src="../../../public/images/Illustration.svg" />
        </div>
      </div>
    </ContainerDelivery>
  );
}
