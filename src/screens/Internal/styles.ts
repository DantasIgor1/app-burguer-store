import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 16px;
  flex: 1;
  background-color: #232227;
`;

export const HamburguerImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 400px;
  align-self: center;
`;

export const HamburguerLabelContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HamburguerName = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

export const AddToCartContainer = styled.View`
  background-color: #242426;
  elevation: 3;
  border-radius: 8px;
  width: 120px;
  height: 60px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const AddToCartButton = styled.TouchableOpacity`
  border-radius: 8px;
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  justify-content: center;
`;
export const QuantityOfBurguers = styled.Text`
  color: white;
  font-size: 16px;
  align-self: center;
`;
export const AddToCartLabel = styled.Text`
  color: black;
  font-size: 20px;
  align-self: center;
`;

export const HamburguerInfoContainer = styled.View``;

export const HamburguerDescription = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: white;
  font-size: 28px;
  max-width: 90%;
  font-weight: bold;
`;

export const PurchaseDetails = styled.View`
  flex: 1;
  justify-content: space-between;

  margin-top: 40px;
`;
export const HamburguerDetails = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;

export const Footer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartContainer = styled.View`
  max-width: 50%;
  padding-top: 16px;
`;

export const TotalPriceLabel = styled.Text`
  color: #7b777d;
  font-size: 16px;
`;

export const OrderPrice = styled.Text`
  color: #40e840;
  font-size: 24px;
`;

export const OrderNowContainer = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: #f0b323;
  width: 150px;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  padding: 14px;
`;
export const OrderNowLabel = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

export const CartIcon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: white;
`;
