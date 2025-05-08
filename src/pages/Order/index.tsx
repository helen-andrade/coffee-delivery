import { Bank, CreditCard, Money, Trash } from "phosphor-react";
import {
  ButtonPayment,
  CoffeesSelected,
  Container,
  Form,
  FormContainer,
  HeaderMapPin,
  Payment,
  SelectedCoffees,
  WrapperLeft,
  CoffeeItem,
  CartActions,
  CartDetails,
  PriceDetails,
  TotalRow,
  AddCoffee,
  RemoveIten,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";
import { CoffeeImg } from "../../components/CoffeeCard/styles";

const schema = z.object({
  cep: z
    .string()
    .length(8, "CEP deve ter 8 caracteres")
    .regex(/^\d{8}$/, "CEP inválido"),
  road: z.string().min(3, "Rua inválida"),
  number: z.string().min(1, "Número obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().min(3, "Bairro inválido"),
  city: z.string().min(2, "Cidade inválida"),
  uf: z.string().length(2, "UF deve ter 2 caracteres"),
});

export function Order() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { cart, incrementQuantity, decrementQuantity, removeCoffee } =
    useCart();

  const deliveryFee = 3.5;
  const itemsTotal = cart.reduce(
    (sum, coffee) => sum + coffee.price * coffee.quantity,
    0
  );
  const total = itemsTotal + deliveryFee;

  function handleConfirmClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const formData = {
      cep: (document.querySelector(".cep") as HTMLInputElement)?.value,
      road: (document.querySelector(".road") as HTMLInputElement)?.value,
      number: (document.querySelector(".number") as HTMLInputElement)?.value,
      complement: (document.querySelector(".complement") as HTMLInputElement)
        ?.value,
      neighborhood: (
        document.querySelector(".neighborhood") as HTMLInputElement
      )?.value,
      city: (document.querySelector(".city") as HTMLInputElement)?.value,
      uf: (document.querySelector(".uf") as HTMLInputElement)?.value,
    };

    const result = schema.safeParse(formData);

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    if (!paymentMethod) {
      toast.error("Selecione uma forma de pagamento.");
      return;
    }

    navigate("/OrderConfirmed", {
      state: {
        ...formData,
        paymentMethod,
      },
    });
  }

  return (
    <Container>
      <WrapperLeft>
        <Form>
          <h2>Complete seu pedido</h2>
          <FormContainer>
            <div>
              <HeaderMapPin>
                <div>
                  <img src="/images/map.svg" alt="" />
                  <span>Endereço de Entrega</span>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </HeaderMapPin>
              <input type="text" className="cep" placeholder="CEP" required />
              <br />
              <input type="text" className="road" placeholder="Rua" required />
              <br />
              <input
                type="text"
                className="number"
                placeholder="Número"
                required
              />
              <input
                type="text"
                className="complement"
                placeholder="Complemento"
              />
              <div>
                <input
                  type="text"
                  className="neighborhood"
                  placeholder="Bairro"
                  required
                />
                <input
                  type="text"
                  className="city"
                  placeholder="Cidade"
                  required
                />
                <input type="text" className="uf" placeholder="UF" required />
              </div>
            </div>
          </FormContainer>
        </Form>
        <Payment>
          <img src="/images/doll.svg" alt="" />
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <ButtonPayment>
            <button
              type="button"
              onClick={() => setPaymentMethod("Cartão de crédito")}
            >
              <div className="iconPayment">
                <CreditCard size={22} />
              </div>
              CARTÃO DE CRÉDITO
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("Cartão de débito")}
            >
              <div className="iconPayment">
                <Bank size={22} />
              </div>
              CARTÃO DE DÉBITO
            </button>
            <button type="button" onClick={() => setPaymentMethod("Dinheiro")}>
              <div className="iconPayment">
                <Money size={22} />
              </div>
              DINHEIRO
            </button>
          </ButtonPayment>
        </Payment>
      </WrapperLeft>

      <SelectedCoffees>
        <h2>Cafés selecionados</h2>
        <CoffeesSelected>
          {cart.map((coffee) => (
            <CoffeeItem key={coffee.id}>
              <CoffeeImg src={coffee.image} alt={coffee.title} />

              <CartDetails>
                <p>{coffee.name}</p>

                <CartActions>
                  <AddCoffee>
                    <div>
                      <button onClick={() => decrementQuantity(coffee.id)}>
                        <img src="/images/decrement.svg" alt="Diminuir" />
                      </button>
                    </div>

                    <span>{coffee.quantity}</span>

                    <div>
                      <button onClick={() => incrementQuantity(coffee.id)}>
                        <img src="/images/increment.svg" alt="Aumentar" />
                      </button>
                    </div>
                  </AddCoffee>
                  <RemoveIten onClick={() => removeCoffee(coffee.id)}>
                    <Trash size={22} />
                    <span>REMOVER</span>
                  </RemoveIten>
                </CartActions>
              </CartDetails>
              <span>R$ {coffee.price.toFixed(2)}</span>
            </CoffeeItem>
          ))}

          <PriceDetails>
            <TotalRow>
              <span>Total de itens</span>
              <span>R$ {itemsTotal.toFixed(2)}</span>
            </TotalRow>
            <TotalRow>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </TotalRow>
            <TotalRow>
              <strong>Total</strong>
              <strong>R$ {total.toFixed(2)}</strong>
            </TotalRow>
          </PriceDetails>

          <button className="confirm-button" onClick={handleConfirmClick}>
            CONFIRMAR PEDIDO
          </button>
        </CoffeesSelected>
      </SelectedCoffees>
    </Container>
  );
}
