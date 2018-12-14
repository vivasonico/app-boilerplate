/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  FormLabel, FormInput, FormValidationMessage, Button,
} from 'react-native-elements';
import { cajasBase, textos, botones } from '../settings/styleSettings';

class LoginS extends Component {
  state = {
    nombre: '',
    numeroTel: '',
    errorNombre: '',
    errorTel: '',
  }

  onSiguiente = () => {
    // Verfiicar formulario
    // Logíca 1 -- Rellenar formu
    // 2 -- Se guarda en Redux nombre y tel. Se añade un campo de renderLogin
    //    - Renderlogin: Formu, SMS, o Bolita circular
    //    - Se recibe datos de SMS
    //    - Se enseña input
    //    - Se pone, se confirma
    //    - Dejar texto abajo en pequeño, volver a enviar SMS
    // 3 -- Se genera token y se navega a home

    const { navigation } = this.props;
    return navigation.navigate('home');
  }

  // La dejo aquí
  validateForm = () => true

  blurError(campo) {
    const { nombre, numeroTel } = this.state;
    if (campo === 'nombre') {
      if (nombre === '') {
        return this.setState({ errorNombre: 'Dinos tu nombre para podernos referir a ti' });
      }
      return this.setState({ errorNombre: '' });
    }
    // por si meto mas campos en el futuro
    // twilo o firebase deben tenre verificacion del campo de telefono, a revisar
    if (campo === 'tel') {
      if (numeroTel === '') {
        return this.setState({ errorTel: 'Dinos tu tel para podernos referir a ti' });
      }
      return this.setState({ errorTel: '' });
    }
    return this.setState({ errorTel: '', errorNombre: '' });
  }

  render() {
    const { errorNombre, errorTel } = this.state;
    return (
      <View style={cajasBase.cajaBase}>
        <Text style={textos.titulo}>Te enviaremos un SMS para confirmar tu número</Text>
        <View style={cajasBase.formu}>
          <FormLabel>Nombre</FormLabel>
          <FormInput
            onChangeText={(e) => { this.setState({ nombre: e }); }}
            placeholder="Javier"
            onBlur={() => { this.blurError('nombre'); }}
          />

          <FormValidationMessage>{errorNombre}</FormValidationMessage>
          <FormLabel>Teléfono</FormLabel>
          <FormInput
            onChangeText={(e) => { this.setState({ numeroTel: e }); }}
            placeholder="+34 654321098"
            onBlur={() => { this.blurError('tel'); }}
          />
          <FormValidationMessage>{errorTel}</FormValidationMessage>
        </View>
        <Button
          title="Siguiente"
          raised
          large
          icon={{ name: 'mobile-phone', type: 'font-awesome' }}
          buttonStyle={botones.CTA}
          onPress={this.onSiguiente}
        />
      </View>
    );
  }
}

export default LoginS;
