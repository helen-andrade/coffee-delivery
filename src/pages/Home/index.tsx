import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  CoffeeInfo,
  CoffeeList,
  Heading,
  HomeContainer,
  Infos,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import { coffees } from "../../../data.json";
import { Card } from "../../components/CoffeeCard/index.tsx";

export function Home() {
  return (
    <div>
      <HomeContainer>
        <CoffeeInfo>
          <div>
            <Heading>
              <h1>
                Encontre o café perfeito <br /> para qualquer hora do dia
              </h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>
            <Infos>
              <div>
                <ShoppingCart
                  className="infos-svg"
                  size={32}
                  weight="fill"
                  color={defaultTheme.colors.background}
                  style={{
                    backgroundColor: defaultTheme.colors["yellow-dark"],
                  }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  className="infos-svg"
                  size={32}
                  weight="fill"
                  color={defaultTheme.colors.background}
                  style={{ backgroundColor: defaultTheme.colors["base-text"] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  className="infos-svg"
                  size={32}
                  weight="fill"
                  color={defaultTheme.colors.background}
                  style={{ backgroundColor: defaultTheme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  className="infos-svg"
                  size={32}
                  weight="fill"
                  color={defaultTheme.colors.background}
                  style={{ backgroundColor: defaultTheme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Infos>
            <img src="../../../public/images/hero.svg" />
          </div>
        </CoffeeInfo>
      </HomeContainer>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  );
}
