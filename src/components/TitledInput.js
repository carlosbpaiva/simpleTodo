/* TitledInput.js */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

import styles from './componentStyles.js';

class TitledInput extends Component {
  static propTypes = {
    label: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{this.props.label.toUpperCase()}</Text>
      <TextInput { ...{ ...this.props,
        style: styles.inputStyle 
      }
    }
    />
    </View>
    );
  }
}

export default TitledInput
