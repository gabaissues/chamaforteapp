import React from "react";

import BoxIcon from "../../../assets/svgs/box_1x";
import RemoveIcon from "../../../assets/svgs/remove";
import AddIcon from "../../../assets/svgs/add";

import * as C from "./styles";

const PiecesPage = ({ navigation }: any) => {
  const handleDone = () => {

    navigation.navigate('done')

  }

  return (
    <C.Container>
      <C.Text margin="58px 0px 0px 0px" fontWeight="600" fontSize="18px">
        Finalizar pedido
      </C.Text>
      <C.Text fontSize="14px">Nos informe quais peças utilizou</C.Text>

      <C.Pieces>
        <C.Piece>
          <C.Header>
            <BoxIcon />
            <C.Text color="#fafafa" fontWeight="600" margin="0px 0px 0px 16px">
              Chave de fenda
            </C.Text>
          </C.Header>

          <C.PieceContent>
            <C.Buttons>
              <AddIcon />
              <C.Rectangle></C.Rectangle>
              <RemoveIcon />
            </C.Buttons>

            <C.Quantity>1</C.Quantity>
          </C.PieceContent>
        </C.Piece>
      </C.Pieces>

      <C.Button onPress={handleDone}><C.Text fontSize="14px" fontWeight="600" color="#fafafa">Concluir pedido</C.Text></C.Button>
    </C.Container>
  );
};

export default PiecesPage;
