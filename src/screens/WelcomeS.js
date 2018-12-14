import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Slides from '../components/slides';
import { paleta, textos } from '../settings/styleSettings';
// import AppLoading from 'expo';


const SLIDE_DATA = [
  { text: 'Bienvenido', color: paleta.verde, },
  { text: 'No te preocupes más', color: paleta.salmonC },
  { text: 'Identificate y gana', color: paleta.verde },
];

class WelcomeS extends Component {
  state = {
    token: null,
  };

  onCompleteSlides = () => {
    const { navigation } = this.props;
    navigation.navigate('login');
  }

  render() {
    const { token } = this.state;
    const authBool = token ? 'Auth' : 'No Auth';

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onCompleteSlides} />
    );
  }
}

WelcomeS.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

export default WelcomeS;
