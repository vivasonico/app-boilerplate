import React from 'react';
import { StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';

// Importa redux y tal
import { Provider } from 'react-redux';
// import store from './src/store';
import configureStore from './src/store';


// Importa Welcome --> carrusel inicial
import WelcomeS from './src/screens/WelcomeS';

// Importa principal navegación
import HomeS from './src/screens/HomeS';
import RequestS from './src/screens/RequestS';
import ProfileS from './src/screens/ProfileS';
import LoginS from './src/screens/LoginS';

import { paleta } from './src/settings/styleSettings';

const { store } = configureStore();
// Importa

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeS, navigationOptions: { tabBarVisible: false } },
  login: { screen: LoginS, navigationOptions: { tabBarVisible: false } },
  mainFlow: {
    screen: createBottomTabNavigator({
      home: { screen: HomeS },
      request: { screen: RequestS },
      profile: { screen: ProfileS },
    }, {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      tabBarOptions: {
        showLabel: false,
        activeTintColor: paleta.salmonI,
        inactiveTintColor: paleta.crema,
      },
    }),
    navigationOptions: { tabBarVisible: false },
  },
});

const MainContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer style={styles.container} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
