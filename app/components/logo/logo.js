import PropTypes from 'prop-types';
import React from 'react';

import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends React.Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  state = {
    containerImageWidth: new Animated.Value(styles.$largeContainersize),
    imageWidth: new Animated.Value(styles.$largeImageSize),
  };

  componentDidMount() {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide,
    );
  }
  componentWillUnmount() {
    this.KeyboardDidShowListener.remove();
    this.KeyboardDidHideListener.remove();
  }

  keyboardWillShow = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.containerImageWidth, {
          toValue: styles.$smallContainerSize,
          duration: ANIMATION_DURATION,
        }),
        Animated.timing(this.state.ImageWidth, {
          toValue: styles.$smallImageSize,
          duration: ANIMATION_DURATION,
        }),
      ]),
    ]).start();
  };

  keyboardWillHide = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.containerImageWidth, {
          toValue: styles.$largeContainerSize,
          duration: ANIMATION_DURATION,
        }),
        Animated.timing(this.state.ImageWidth, {
          toValue: styles.$largeImageSize,
          duration: ANIMATION_DURATION,
        }),
      ]),
    ]).start();
  };

  render() {
    const containerImageStyles = [
      styles.containerImage,
      { width: this.state.containerImageWidth, height: this.state.containerImageWidth },
    ];
    const imageStyle = [
      styles.logo,
      { width: this.state.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];
    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/logo.png')}
          />

        </Animated.View>
        <Text style={styles.text}>FFRSIM</Text>
      </View>
    );
  }
}

export default Logo;
