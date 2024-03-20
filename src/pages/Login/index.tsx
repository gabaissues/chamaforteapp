import React from "react";

import * as C from "./styles";

import Logo from "../../../assets/svgs/logo";

const LoginPage = ({ navigation }: any) => {
  
  const handlePress = () => {
    navigation.navigate("initial");
  }

  return (
    <C.Container>
      <C.Header>
        <Logo />
        <C.Text
          margin={"16px 0px 0px 0px"}
          textAlign={"center"}
          fontSize={"20px"}
          fontWeight={"600"}
        >
          Olá, seja bem vindo! 👋
        </C.Text>
        <C.Text fontSize={"16px"} textAlign={"center"} margin={"0px 32px"}>
          Seja bem vindo ao nosso APP de serviços, basta logar e você terá todo
          acesso as funções!
        </C.Text>
      </C.Header>

      <C.Form behavior="padding" style={{flex: 1}}>
        <C.Label>E-mail</C.Label>
        <C.Input placeholderTextColor={"#fafafa"} placeholder="E-mail" />
        <C.Label>Senha</C.Label>
        <C.Input placeholderTextColor={"#fafafa"} placeholder="Senha" />
        <C.Button onPress={handlePress}>
          <C.Text color={"#fafafa"} fontWeight={"600"}>Entrar</C.Text>
        </C.Button>
      </C.Form>
    </C.Container>
  );
};

export default LoginPage