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
  margin-bottom: 16px;
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

export const Status = styled.Text`
  background-color: #FFC296;
  padding: 5px 10px;
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
`

export const Info = styled.View`
  margin-top: 15px;
`
export const InfoBox = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 8px;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: #2D2D2D;
`

export const InfoContent = styled.View`
  padding: 16px 24px;
  border-radius: 8px;
  margin-top: 16px;
  background-color: #2D2D2D;
`

export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 16px;
`

export const Button = styled.TouchableOpacity<{ backgroundColor: string, margin?: string }>`
  width: 47.5%;
  background-color: ${props => props.backgroundColor};
  padding: 16px 0px;
  border-radius: 8px;
  margin: ${props => props.margin ? props.margin : "0px"};
`