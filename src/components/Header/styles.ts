import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const LeftSideIcon = styled.Image`
  width: 30px;
  height: 30px;
  tint-color: white;
`;

// TODO: Keep the same size for both icons on the Header component

export const RightSideIcon = styled.Image`
  width: 40px;
  height: 40px;
  tint-color: white;
`;
