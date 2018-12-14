import { StyleSheet, Platform, Dimensions } from 'react-native';

const fuente = Platform.OS === 'android' ? 'Roboto' : 'Helvetica';
const SCREEN_WIDTH = Dimensions.get('window').width;

const paleta = {
  fondo: '#FFFFFF',
  verde: '#84DCC6',
  crema: '#A5FFD6',
  salmonC: '#FFA69E',
  salmonI: '#FF686B',
};

const sombras = {
  elevation: 4,
  shadowOffset: { width: 3, height: 3 },
  shadowColor: '#777',
  shadowOpacity: 0.33,
  shadowRadius: 5,
};

const textos = StyleSheet.create({
  titulo: {
    fontFamily: fuente,
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    padding: 20,
    color: paleta.salmonI,
  },
});

const cajasBase = StyleSheet.create({
  cajaBase: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: SCREEN_WIDTH * 0.4,
  },
  formu: {
    width: SCREEN_WIDTH * 0.8,
  },
});

const botones = StyleSheet.create({
  CTA: {
    ...sombras,
    backgroundColor: paleta.verde,
    marginTop: 15,
    width: SCREEN_WIDTH * 0.8,
  },
});

export {
  paleta, textos, cajasBase, botones, sombras,
};
