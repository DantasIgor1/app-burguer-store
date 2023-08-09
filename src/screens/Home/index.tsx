import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {
  BlankDot,
  Container,
  FilterIcon,
  FilterMenu,
  FilterOptionsLabel,
  MainTitle,
  SubTitle,
  TouchableFilterOptions,
  YellowDot,
} from './styles';
import {Header} from '../../components/Header';
import {BurgerCard} from '../../components/BurgerCard';
import {
  DATA,
  filterIconUri,
  filter,
  leftSideIcon,
  rightSideIcon,
} from './mocks';

export const Home: React.FC = () => {
  /**
   * States
   */

  const [selectedFoodTypeId, setSelectedFoodTypeId] = useState<number>(1);

  return (
    <Container>
      <Header leftSideIcon={leftSideIcon} rightSideIcon={rightSideIcon} />
      <MainTitle>Every Bite a</MainTitle>
      <SubTitle>Better burguer!</SubTitle>
      <FilterMenu>
        {filter.map(item => {
          return (
            <TouchableFilterOptions
              onPress={() => setSelectedFoodTypeId(item.id)}
              key={item.id}>
              {selectedFoodTypeId === item.id ? <YellowDot /> : <BlankDot />}
              <FilterOptionsLabel isSelected={selectedFoodTypeId === item.id}>
                {item.label}
              </FilterOptionsLabel>
            </TouchableFilterOptions>
          );
        })}
        <TouchableFilterOptions>
          <FilterIcon
            source={{
              uri: filterIconUri,
            }}
          />
        </TouchableFilterOptions>
      </FilterMenu>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <BurgerCard item={item} />}
      />
    </Container>
  );
};
