import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import TodoScreen from './TodoScreen';
import TodoListScreen from './TodoListScreen';

import MainNavigator from '../navigation/MainTabNavigator';

class MainScreen extends Component {
	render() {
		if( this.props.loggedIn ) {
			return(
				<View style={styles.container}>
				<TodoListScreen />
				</View>
			)
		} else {
			return (
				<View style={styles.container}>
				<LoginForm />
				</View>
			)
		}
	}
}

const mapStateToProps = state => {
	const props = { user, loggedIn } = state.user;
	return props;
};

export default MainScreenContainer = connect(mapStateToProps)(MainScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',

	},
	statusBarUnderlay: {
		height: 24,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
});	
