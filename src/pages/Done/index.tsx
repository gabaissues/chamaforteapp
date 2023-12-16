import React from "react";

import DoneIcon from "../../../assets/svgs/done";

import * as C from "./styles";

const DonePage = () => {
  return (
    <C.Container>
      <C.Content>
        <DoneIcon />
        <C.Text fontSize="18px" fontWeight="600" margin="24px 0px 8px 0px">Ação concluída com sucesso.</C.Text>
        <C.Text fontSize="14px" textAlign="center">O seu pedido foi concluído com sucesso. Já foi inserido no nosso sistema.</C.Text>
      </C.Content>

      <C.Button><C.Text color="#fafafa" padding="4px 16px">Navegar para o início</C.Text></C.Button>
    </C.Container>
  );
};

export default DonePage;
