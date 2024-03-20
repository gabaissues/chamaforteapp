import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #111111;
  position: absolute;
  justify-content: center;
  margin: 120px 48px;
  width: 100%;
  padding: 20px 30px;
  border-radius: 16px;
  height: 250px;
`

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

export const Input = styled.TextInput`
  background-color: #2D2D2D;
  border-radius: 8px;
  padding: 10px 20px;
`
export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 18px;
`

export const ButtonClose = styled.TouchableOpacity`
  background-color: #626262;
  width: 60%;
  margin-right: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 0px;
`
export const ButtonCancel = styled.TouchableOpacity`
  background-color: #FF8181;
  width: 30%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 0px;
`