import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 32px 48px;
`;

export const Text = styled.Text<{
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  color?: string;
  textAlign?: string;
}>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  color: ${(props) => (props.color ? props.color : "#2d2d2d")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 56px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const UserContent = styled.View`
  margin-left: 16px;
`;

export const Orders = styled.ScrollView``;

export const OrderItem = styled.TouchableOpacity`
  padding: 16px;
  height: 70px;
  border-radius: 8px;
  background-color: #2d2d2d;
  flex-direction: row;
  justify-content: space-between;
`;

export const OrderItemContent = styled.View``;

export const OrderId = styled.Text`
  background-color: #fafafa;
  padding: 7px 20px;
  border-radius: 65px;
  align-items: center;
  align-self: center;
  justify-content: center;
  text-align: center;
`;
