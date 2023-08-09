import React, {useState} from 'react';
// TODO: Remove all the unnused imports
import {
  AddToCharButton,
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
  Separator,
  PurchaseDetails,
} from './styles';
import {Header} from '../../components/Header';
import {useRoute} from '@react-navigation/native';

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
    // FIXME: use the ((oldState) => oldState + 1) syntax to proper handling of the
    // state life cycle
    setNumberOfBurgers(numberOfBurgers + 1);
  };
  const handleDecrement = () => {
    if (numberOfBurgers === 1) {
      return;
    }
    // TODO: same here
    setNumberOfBurgers(numberOfBurgers - 1);
  };

  return (
    <Container>
      <Header
        // TODO: move the static urls to the mocks.ts file and import them to here
        leftSideIcon="https://cdn-icons-png.flaticon.com/512/32/32542.png"
        rightSideIcon="https://static.thenounproject.com/png/4572884-200.png"
      />
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
                // TODO: move the static urls to the mocks.ts file and import them to here
                uri: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
              }}
            />
          </OrderNowContainer>
        </Footer>
      </PurchaseDetails>
    </Container>
  );
};
