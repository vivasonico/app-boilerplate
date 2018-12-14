/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Icon,
} from 'react-native-elements';
import { cajasBase, textos, botones } from '../settings/styleSettings';

class HomeS extends Component {
  static navigationOptions = {
    title: 'Mis Seguros',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="shield" type="font-awesome" size={30} color={tintColor} />;
    },
  }
  render() {
    return (
      <View style={cajasBase.cajaBase}>
        <Text>Home S</Text>
        <Text>Home S</Text>
        <Text>Home S</Text>
        <Text>Home S</Text>
      </View>
    );
  }
}

export default HomeS;
