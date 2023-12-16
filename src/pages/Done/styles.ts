import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  padding: 32px 48px;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

export const Button = styled.TouchableOpacity`
  background-color: #002b3a;
  padding: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border-radius: 8px;
`;
