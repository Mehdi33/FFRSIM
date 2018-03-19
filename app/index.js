import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',
});

export default () => <Home />;
