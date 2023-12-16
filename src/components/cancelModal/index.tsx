import React from "react";

import * as C from './styles'

const CancelModalComponent = (props: any) => {
  return (
    <C.Container>
      <C.Text fontSize="18px" color="#fafafa" fontWeight="600">
        Cancelar pedido
      </C.Text>
      <C.Text fontSize="14px" color="#fafafa">Você tem certeza que deseja cancelar este pedido?</C.Text>

      <C.Text color="#fafafa" fontSize="14px" margin="16px 0px 5px 0px">Motivo:</C.Text>
      <C.Input placeholderTextColor={"#fafafa"} placeholder="Insira o motivo..." />

      <C.Buttons>
        <C.ButtonClose onPress={props.onPress}>
          <C.Text color="#fafafa">Fechar</C.Text>
        </C.ButtonClose>
        <C.ButtonCancel>
          <C.Text>OK</C.Text>
        </C.ButtonCancel>
      </C.Buttons>
    </C.Container>
  );
};


export default CancelModalComponent