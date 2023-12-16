import React from "react";

import * as C from "./styles";

import LogoIcon from "../../../assets/svgs/logo_1x";
import UserIcon from "../../../assets/svgs/userIcon";
import TelephoneIcon from "../../../assets/svgs/telephone_1x";
import LocationIcon from "../../../assets/svgs/location_1x";
import CancelModalComponent from "../../components/cancelModal";

const OrderPage = ({ navigation }: any) => {
  const [cancel, setCancel] = React.useState(false)
  
  
  const handleCancel = () => {
    setCancel(!cancel)
  }

  const handleDone = () => {

    navigation.navigate('pieces')

  }

  return (
    <C.Container>
      <C.Header>
        <LogoIcon />

        <C.Text fontWeight="400">Detalhes</C.Text>
      </C.Header>

      <C.User>
        <UserIcon />

        <C.UserContent>
          <C.Text fontSize="18px" fontWeight="600" margin="0px 0px 3px 0px">
            Fátima Bernadez
          </C.Text>
          <C.Text fontSize="14px" fontWeight="400">
            Hà 2 meses
          </C.Text>

          <C.Status>Atríbuido</C.Status>
        </C.UserContent>
      </C.User>
      <C.Info>
        <C.InfoBox>
          <C.Text fontWeight="600" color="#fafafa">
            (11) 95084-5254
          </C.Text>
          <TelephoneIcon />
        </C.InfoBox>
        <C.InfoBox>
          <C.Text fontWeight="600" color="#fafafa">
            Rua Mogi das Cruzes
          </C.Text>
          <LocationIcon />
        </C.InfoBox>
        <C.InfoContent>
          <C.Text fontSize="18px" fontWeight="600" color="#fafafa">
            Informações
          </C.Text>
          <C.Text color="#fafafa" margin="12px 0px 0px 0px" fontSize="14px">
            Data: 11/12/2023 8:03
          </C.Text>
          <C.Text color="#fafafa" margin="2px 0px 0px 0px" fontSize="14px">
            Marca: Atlas
          </C.Text>
          <C.Text color="#fafafa" margin="2px 0px 0px 0px" fontSize="14px">
            Problema: Tampa não fecha e regulagem das chamas
          </C.Text>
          <C.Text color="#fafafa" margin="2px 0px 0px 0px" fontSize="14px">
            Observação: Não especificado.
          </C.Text>
          <C.Text color="#fafafa" margin="2px 0px 0px 0px" fontSize="14px">
            Equipamento: Fogão
          </C.Text>
        </C.InfoContent>
        <C.InfoContent>
          <C.Text fontSize="18px" fontWeight="600" color="#fafafa">
            Imagens
          </C.Text>
          <C.Text color="#fafafa" margin="4px 0px 0px 0px" fontSize="14px">
            Esse pedido não contém imagens.
          </C.Text>
        </C.InfoContent>
      </C.Info>

      <C.Buttons>
        <C.Button onPress={handleCancel} margin="0px 16px 0px 0px" backgroundColor="#626262">
          <C.Text textAlign="center" color="#fafafa" fontWeight="600">Cancelar pedido</C.Text>
        </C.Button>

        <C.Button onPress={handleDone} backgroundColor="#002B3A">
          <C.Text textAlign="center" color="#fafafa" fontWeight="600">Concluir</C.Text>
        </C.Button>
      </C.Buttons>
    
      {cancel ? <CancelModalComponent onPress={handleCancel} /> : null}
    </C.Container>
  );
};

export default OrderPage;
