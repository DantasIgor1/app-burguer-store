import React, {useState} from 'react';

import {
  AddToCartContainer,
  AddToCartLabel,
  Container,
  BurgerDescription,
  BurgerDetails,
  BurgerImage,
  BurgerInfoContainer,
  BurgerLabelContainer,
  BurgerName,
  QuantityOfBurguers,
  AddToCartButton,
  CartContainer,
  OrderNowContainer,
  Footer,
  TotalPriceLabel,
  OrderPrice,
  OrderNowLabel,
  CartIcon,
  PurchaseDetails,
} from './styles';
import {Header} from '../../components/Header';
import {useRoute} from '@react-navigation/native';
import {CartIconUri, leftSideIcon, rightSideIcon} from './mocks';

export const Internal: React.FC = () => {
  /**
   * Navigation
   */
  const {params} = useRoute();
  const {item} = params;

  /**
   * States
   */
  const [numberOfBurgers, setNumberOfBurgers] = useState(1);

  /**
   * Callbacks
   */
  const handleIncrement = () => {
    setNumberOfBurgers(oldState => oldState + 1);
  };
  const handleDecrement = () => {
    if (numberOfBurgers === 1) {
      return;
    }

    setNumberOfBurgers(oldState => oldState - 1);
  };

  return (
    <Container>
      <Header leftSideIcon={leftSideIcon} rightSideIcon={rightSideIcon} />
      <BurgerImage source={{uri: item?.url}} />
      <BurgerLabelContainer>
        <BurgerInfoContainer>
          <BurgerName>{item?.title}</BurgerName>
          <BurgerDescription>{item?.description}</BurgerDescription>
        </BurgerInfoContainer>

        <AddToCartContainer>
          <AddToCartButton onPress={handleDecrement}>
            <AddToCartLabel>-</AddToCartLabel>
          </AddToCartButton>
          <QuantityOfBurguers>{numberOfBurgers}</QuantityOfBurguers>
          <AddToCartButton onPress={handleIncrement}>
            <AddToCartLabel>+</AddToCartLabel>
          </AddToCartButton>
        </AddToCartContainer>
      </BurgerLabelContainer>
      <PurchaseDetails>
        <BurgerDetails>{item?.buyDetail}</BurgerDetails>
        <Footer>
          <CartContainer>
            <TotalPriceLabel>Total Price</TotalPriceLabel>
            <OrderPrice>
              {(item.price * numberOfBurgers).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </OrderPrice>
          </CartContainer>
          <OrderNowContainer>
            <OrderNowLabel>Order Now</OrderNowLabel>
            <CartIcon
              source={{
                uri: CartIconUri,
              }}
            />
          </OrderNowContainer>
        </Footer>
      </PurchaseDetails>
    </Container>
  );
};
