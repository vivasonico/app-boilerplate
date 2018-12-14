import React, { Component } from 'react';
import {
  View, Text, ScrollView, Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-native-elements';
import { paleta, textos } from '../settings/styleSettings';

const SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component {
  renderLastSlide(index) {
    const { data, onComplete } = this.props;
    // (index === data.length - 1)
    if (index === 0) {
      return (
        <Button
          icon={{ name: 'mobile-phone', type: 'font-awesome' }}
          title="Quiero maximizar mi seguro!"
          raised
          large
          buttonStyle={styles.buttonStyle}
          onPress={onComplete}
        />
      );
    }
    return (
      <Icon name="shield" type="font-awesome" color="white" size={60} />
    );
  }

  renderCirculos(i) {
    const { data } = this.props;
    const buildIcons = data.map((e, index) => {
      const key = `ic${index}`;
      return (
        <Icon
          name="shield"
          type="font-awesome"
          color={i === index ? 'gray' : 'white'}
          key={key}
          size={15}
        />
      );
    });
    return (
      <View style={styles.circulosStyle}>
        {buildIcons}
      </View>
    );
  }

  renderSlides() {
    const { data } = this.props;
    return data.map((slide, i) => {
      const textColor = slide.textColor ? slide.textColor : 'white';
      return (
        <View style={[styles.slideStyle, { backgroundColor: slide.color }]} key={slide.text}>
          <Text style={[styles.textStyle, textos.titulo, { color: textColor }]}>{slide.text}</Text>
          {this.renderLastSlide(i)}
          {this.renderCirculos(i)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

Slides.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onComplete: PropTypes.func.isRequired,
};

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  textStyle: {
    fontSize: 30,
    marginBottom: 30,
  },
  buttonStyle: {
    backgroundColor: paleta.salmonI,
    marginTop: 15,
  },
  circulosStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH / 3,
  },
};


export default Slides;
