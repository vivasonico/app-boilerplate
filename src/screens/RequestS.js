/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import {
  Icon,
} from 'react-native-elements';
import { View, Text } from 'react-native';

class RequestS extends Component {
  static navigationOptions = {
    title: 'Request',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="balance-scale" type="font-awesome" size={30} color={tintColor} />;
    },
  }
  render() {
    return (
      <View>
        <Text>Request S</Text>
        <Text>Request S</Text>
        <Text>Request S</Text>
        <Text>Request S</Text>
      </View>
    );
  }
}

export default RequestS;
