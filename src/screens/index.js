import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import TodoScreen from './TodoScreen';
import TodoListScreen from './TodoListScreen';

// import MainNavigator from '../navigation/MainTabNavigator';

const MainNavigator = StackNavigator(
	{
		TodoList: {
			screen: TodoListScreen,
			navigationOptions: () => ({
				title: 'ToDo List' 
			})
		},
		Todo: {
			screen: TodoScreen,
			navigationOptions: ({ navigation }) => {
				let title = "New Todo Item"
				if( navigation.state.params ) {
					title = `${navigation.state.params.item.title}'s Info`;
				}
				return { title };
			},
		},
	},
	{
		initialRouteName: 'TodoList',
	}
);

class MainScreen extends Component {
	render() {
		if( this.props.loggedIn ) {
			return(
				<MainNavigator />
			)
		} else {
			return (
				<LoginForm />
			)
		}
	}
}

const mapStateToProps = state => {
	const props = { loggedIn } = state.user;
	return props;
};

export default MainScreenContainer = connect(mapStateToProps)(MainScreen);
