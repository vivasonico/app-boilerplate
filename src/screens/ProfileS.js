/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Icon,
} from 'react-native-elements';

class ProfileS extends Component {
  static navigationOptions = {
    title: 'Request',
    tabBarIcon: ({ tintColor }) => <Icon name="user-secret" type="font-awesome" size={30} color={tintColor} />,
  }

  render() {
    return (
      <View>
        <Text>Profile S</Text>
        <Text>Profile S</Text>
        <Text>Profile S</Text>
        <Text>Profile S</Text>
      </View>
    );
  }
}

export default ProfileS;
