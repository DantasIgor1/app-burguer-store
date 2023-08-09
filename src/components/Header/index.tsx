import React from 'react';
import {Container, LeftSideIcon, RightSideIcon} from './styles';
import {TouchableOpacity} from 'react-native';
import {HeaderProps} from './types';
import {useNavigation} from '@react-navigation/native';
export const Header = ({leftSideIcon, rightSideIcon}: HeaderProps) => {
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
//'https://icon-library.com/images/hamburger-menu-icon-png-white/hamburger-menu-icon-png-white-14.jpg'
//'https://www.shareicon.net/data/512x512/2015/10/31/664907_search_512x512.png'
