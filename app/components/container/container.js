import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

container.propTypes = {
  children: PropTypes.any,
};

export default container;
