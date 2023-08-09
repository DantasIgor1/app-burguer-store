import React from 'react';

import {
  Container,
  HamburguerDetails,
  HamburguerImage,
  HamburguerName,
  HamburguerPrice,
} from './styles';
import {CardProps} from './types';
import {useNavigation} from '@react-navigation/native';

export const HamburguerCard = ({item}: {item: CardProps}) => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('Internal', {item})}>
      <HamburguerImage source={{uri: item?.url}} />
      <HamburguerName>{item?.title}</HamburguerName>
      <HamburguerDetails>{item?.description}</HamburguerDetails>
      <HamburguerPrice>{item?.price}</HamburguerPrice>
    </Container>
  );
};
