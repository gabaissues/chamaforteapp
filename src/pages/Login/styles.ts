import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: "#fafafa";
  color: "#2D2D2D";
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 64px;
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

export const Image = styled.Image``;

export const Form = styled.View`
  background-color: #DFDFDF;
  padding: 32px 64px; 
  flex: 1;
  height: 100%;
`

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`
export const Input = styled.TextInput`
  width: 100%;
  background-color: #002B3A;
  color: #fafafa;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`
export const Button = styled.TouchableOpacity`
  background-color: #2D2D2D;
  padding: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border-radius: 8px;
`