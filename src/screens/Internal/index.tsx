import React, {useState} from 'react';
import {
  AddToCharButton,
  AddToCartContainer,
  AddToCartLabel,
  Container,
  HamburguerDescription,
  HamburguerDetails,
  HamburguerImage,
  HamburguerInfoContainer,
  HamburguerLabelContainer,
  HamburguerName,
  QuantityOfBurguers,
  AddToCartButton,
  CartContainer,
  OrderNowContainer,
  Footer,
  TotalPriceLabel,
  OrderPrice,
  OrderNowLabel,
  CartIcon,
  Separator,
  PurchaseDetails,
} from './styles';
import {Header} from '../../components/Header';
import {useRoute} from '@react-navigation/native';

export const Internal: React.FC = () => {
  const [numberOfHamburguers, setNumberOfHamburguers] = useState(1);
  const {params} = useRoute();
  const {item} = params;
  const handleIncrement = () => {
    setNumberOfHamburguers(numberOfHamburguers + 1);
  };
  const handleDecrement = () => {
    if (numberOfHamburguers === 1) {
      return;
    }
    setNumberOfHamburguers(numberOfHamburguers - 1);
  };
  return (
    <Container>
      <Header
        leftSideIcon="https://cdn-icons-png.flaticon.com/512/32/32542.png"
        rightSideIcon="https://static.thenounproject.com/png/4572884-200.png"
      />
      <HamburguerImage source={{uri: item?.url}} />
      <HamburguerLabelContainer>
        <HamburguerInfoContainer>
          <HamburguerName>{item?.title}</HamburguerName>
          <HamburguerDescription>{item?.description}</HamburguerDescription>
        </HamburguerInfoContainer>

        <AddToCartContainer>
          <AddToCartButton onPress={handleDecrement}>
            <AddToCartLabel>-</AddToCartLabel>
          </AddToCartButton>
          <QuantityOfBurguers>{numberOfHamburguers}</QuantityOfBurguers>
          <AddToCartButton onPress={handleIncrement}>
            <AddToCartLabel>+</AddToCartLabel>
          </AddToCartButton>
        </AddToCartContainer>
      </HamburguerLabelContainer>
      <PurchaseDetails>
        <HamburguerDetails>{item?.buyDetail}</HamburguerDetails>
        <Footer>
          <CartContainer>
            <TotalPriceLabel>Total Price</TotalPriceLabel>
            <OrderPrice>
              {(item.price * numberOfHamburguers).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </OrderPrice>
          </CartContainer>
          <OrderNowContainer>
            <OrderNowLabel>Order Now</OrderNowLabel>
            <CartIcon
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
              }}
            />
          </OrderNowContainer>
        </Footer>
      </PurchaseDetails>
    </Container>
  );
};
