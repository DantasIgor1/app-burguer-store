import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 49%;
  padding: 16px;
  border-radius: 8px;
`;

export const HamburguerImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 150px;
  height: 150px;
  align-self: center;
`;

export const HamburguerName = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const HamburguerDetails = styled.Text`
  font-size: 16px;
  color: white;
`;

export const HamburguerPrice = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
