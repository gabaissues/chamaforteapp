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

export const Pieces = styled.ScrollView`
  margin-top: 38px;
`
export const Piece = styled.View`
  background-color: #3A3A3A;
  border-radius: 8px;
`
export const Header = styled.View`
  flex-direction: row;
  background-color: #4D4D4D;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  padding: 16px 20px;
`

export const PieceContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  justify-content: space-between;
`
export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
`

export const Rectangle = styled.View`
  width: 3px;
  height: 30px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 0px 12px;
  background-color: #fafafa;
`
export const Quantity = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fafafa;
`

export const Button = styled.TouchableOpacity`
  background-color: #002B3A;
  padding: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border-radius: 8px;
`