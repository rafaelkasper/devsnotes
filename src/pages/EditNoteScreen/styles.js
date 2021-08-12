import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: #333;
`;

export const TitleInput = styled.TextInput`
font-size: 20px;
font-weight: bold;
padding: 15px;
color: #FFF;
`;

export const BodyInput = styled.TextInput`
flex: 1;
font-size: 15px;
padding: 15px;
color: #FFF;
`;

export const SaveButton = styled.TouchableHighlight`

`;

export const SaveButtonImage = styled.Image`
width: 24px;
height: 24px;
margin-right: 15px;
`;

export const CloseButton = styled.TouchableHighlight`
margin-left: 15px;
`;

export const CloseButtonImage = styled.Image`
width: 20px;
height: 20px;

`;

export const DeleteButton = styled.TouchableHighlight`
height: 40px;
background-color: #FF3333;
justify-content: center;
align-items: center;
`;

export const DeleteButtonText = styled.Text`
font-size: 14px;
color: #FFF;
`;