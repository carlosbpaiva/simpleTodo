/* TitledInput.js */
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { StyleSheet } from 'react-native';
import styles from './componentStyles.js';

export default TitledInput = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.label.toUpperCase()}</Text>
            <TextInput { ...{ ...props,
                                style: styles.inputStyle 
                            }
                        }
            />
        </View>
    );
};