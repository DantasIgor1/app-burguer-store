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

// TODO: Move all the mocked info to a mocks.ts file
const filter = [
  {id: 1, label: 'Burguer'},
  {id: 2, label: 'Pasta'},
  {id: 3, label: 'Salads'},
];

const DATA = [
  {
    id: 1,
    title: 'Beef Burger',
    description: 'Beef with cheese',
    price: 18,
    buyDetail:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequuntur cum eius alias omnis natus quod nisi vitae mollitia quibusdam?',
    url: 'https://images-ext-2.discordapp.net/external/D2Yqlcv2Z-w47r0Ozh6z6QkLelp1-DqiSFhtWS9nj-c/https/upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png?width=1013&height=675',
  },
  {
    id: 2,
    title: 'Chicken Burger',
    description: 'Chicken with cheese',
    price: 12,
    buyDetail:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequuntur cum eius alias omnis natus quod nisi vitae mollitia quibusdam?',
    url: 'https://bk-cms-dev.s3.amazonaws.com/_800x600_crop_center-center_none/Chicken_Duplo_meta_375x142-50k.png?mtime=20201219133729&focal=none&tmtime=20210429145018',
  },
  {
    id: 3,
    title: 'Classic Burger',
    description: 'Beef with salad',
    price: 24,
    buyDetail:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequuntur cum eius alias omnis natus quod nisi vitae mollitia quibusdam?',
    url: 'https://mymiamigrill.com/wp-content/uploads/2020/08/classic-burger.png',
  },
  {
    id: 4,
    title: 'Grilled Burger',
    description: 'Grilled chicken',
    price: 14,
    buyDetail:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, consequuntur cum eius alias omnis natus quod nisi vitae mollitia quibusdam?',
    url: 'https://i.pinimg.com/originals/e6/37/c0/e637c03e9108f36c005b0053d8e69431.png',
  },
];

export const Home: React.FC = () => {
  /**
   * States
   */

  // Type the state to it's correct type
  const [selectedFoodTypeId, setSelectedFoodTypeId] = useState(1);

  return (
    <Container>
      <Header
        // TODO: Move all the static urls to the mocks.ts file and export them as a const
        leftSideIcon="https://icon-library.com/images/hamburger-menu-icon-png-white/hamburger-menu-icon-png-white-14.jpg"
        rightSideIcon="https://www.shareicon.net/data/512x512/2015/10/31/664907_search_512x512.png"
      />
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
              // TODO: move this static url to the mocks.ts file as well
              uri: 'https://cdn-icons-png.flaticon.com/128/3126/3126539.png',
            }}
          />
        </TouchableFilterOptions>
      </FilterMenu>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <BurgerCard item={item} />}
        keyExtractor={(item, index) =>
          `burguer-${item.id}-in-list-position-${index}`
        }
      />
    </Container>
  );
};
