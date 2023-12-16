import React from "react";

import * as C from './styles'

import LogoIcon from '../../../assets/svgs/logo_1x'
import UserIcon from '../../../assets/svgs/userIcon'

const InitialPage = ({ navigation }: any) => {

  const handlePress = () => {

    navigation.navigate('order')

  }

  return (
    <C.Container>
      <C.Header>
        <LogoIcon/>

        <C.Text fontWeight="400">Página inicial</C.Text>
      </C.Header>

      <C.User>
        <UserIcon />

        <C.UserContent>
          <C.Text fontSize="18px" fontWeight="600" margin="0px 0px 8px 0px">Matheus Silvestre D. Lima</C.Text>
          <C.Text fontSize="14px" fontWeight="400">Técnico</C.Text>

          <C.Text fontSize="16px" fontWeight="600">Dívida total: R$250,00</C.Text>
        </C.UserContent>

      </C.User>

      <C.Text margin="58px 0px 4px 4px" fontWeight="600">Pedidos</C.Text>

      <C.Orders>

        <C.OrderItem onPress={handlePress}>

          <C.OrderItemContent>

            <C.Text fontWeight="600" fontSize="16px" color="#fafafa" >Fátima Bernadez</C.Text>
            <C.Text fontWeight="400" fontSize="14px" color="#fafafa">10/12/2023 6:47</C.Text>

          </C.OrderItemContent>

          <C.OrderId># 1</C.OrderId>
        </C.OrderItem>

      </C.Orders>
    </C.Container>
  );
};

export default InitialPage;