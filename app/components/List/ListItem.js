import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHightlight } from 'react-native';
import Icon from './Icon';

import styles from './styles';

const ListItem = (
  text,
  selected = false,
  onPress,
  checkmark = true,
  visible = true,
  customIcon = null,
) => (
  <TouchableHightlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
      {customIcon}
    </View>
  </TouchableHightlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
};

export default ListItem;
