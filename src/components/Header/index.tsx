import React from 'react';
import {Container, LeftSideIcon, RightSideIcon} from './styles';
import {TouchableOpacity} from 'react-native';
import {HeaderProps} from './types';
import {useNavigation} from '@react-navigation/native';

export const Header = ({leftSideIcon, rightSideIcon}: HeaderProps) => {
  /**
   * Navigation
   */
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.canGoBack() && navigation.goBack()}>
        <LeftSideIcon
          source={{
            uri: leftSideIcon,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <RightSideIcon
          source={{
            uri: rightSideIcon,
          }}
        />
      </TouchableOpacity>
    </Container>
  );
};
