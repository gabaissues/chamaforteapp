import React from "react";

import * as C from "./styles";

import LogoIcon from "../../../assets/svgs/logo_1x";

const DebtPage = () => {
  return (
    <C.Container>
      <C.Header>
        <LogoIcon />

        <C.Text fontWeight="400">Pagamentos</C.Text>
      </C.Header>
      <C.Nav>
        <C.WithPayment>
          <C.Text fontWeight="500" fontSize="16px">Sem pagamento</C.Text>
          <C.Divider activate={true}></C.Divider>
        </C.WithPayment>
        <C.WithoutPayment>
          <C.Text fontWeight="500" fontSize="16px">Com pagamento</C.Text>
          <C.Divider activate={false}></C.Divider>
        </C.WithoutPayment>
      </C.Nav>


      <C.Text margin="58px 0px 4px 4px" fontWeight="600">Pedidos</C.Text>

      <C.Orders>

        <C.OrderItem>

          <C.OrderItemContent>

            <C.Text fontWeight="600" fontSize="16px" color="#fafafa" >Fátima Bernadez</C.Text>
            <C.Text fontWeight="400" fontSize="14px" color="#fafafa">10/12/2023 6:47</C.Text>

          </C.OrderItemContent>

          <C.OrderId># 1</C.OrderId>
        </C.OrderItem>

      </C.Orders>

      <C.Text textAlign="center" fontSize="16px">Dívida total dos pedidos:</C.Text>
      <C.Text textAlign="center" margin="0px 0px 16px 0px" fontWeight="600" fontSize="20px">R$250,00</C.Text>

      <C.Button><C.Text color="#fafafa" padding="4px 16px">Pagar agora</C.Text></C.Button>
    </C.Container>
  );
};

export default DebtPage;
