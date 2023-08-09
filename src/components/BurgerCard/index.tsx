import React from 'react';

import {
  Container,
  BurgerDetails,
  BurgerImage,
  BurgerName,
  BurgerPrice,
} from './styles';
import {CardProps} from './types';
import {useNavigation} from '@react-navigation/native';

export const BurgerCard = ({item}: {item: CardProps}) => {
  /**
   * Navigation
   */
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Internal', {item})}>
      <BurgerImage source={{uri: item?.url}} />
      <BurgerName>{item?.title}</BurgerName>
      <BurgerDetails>{item?.description}</BurgerDetails>
      <BurgerPrice>{item?.price}</BurgerPrice>
    </Container>
  );
};
