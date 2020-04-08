import React from 'react';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import {backHeaderStyles} from './styles';

const BackHeader = ({onPress, title}) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={onPress}
          style={backHeaderStyles.marginLeft}>
          <Icon name="arrow-back" style={backHeaderStyles.iconColor} />
        </Button>
      </Left>
      <Body style={backHeaderStyles.flex}>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default BackHeader;
