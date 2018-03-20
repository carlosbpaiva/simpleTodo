import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import LoginForm from './LoginForm';

export default class MainScreen extends Component {
	render() {
		return (
				<View style={{
						flex: 1, 
						alignItems: 'center',
						justifyContent: 'center',
					}}>
			        <LoginForm />
				</View>
			)
	}
}
