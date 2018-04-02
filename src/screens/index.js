import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import TodoScreen from './TodoScreen';
import TodoListScreen from './TodoListScreen';
import ContactPickerScreen from './ContactPickerScreen';
import CameraScreen from './CameraScreen';

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
		ContactPicker: {
			screen: ContactPickerScreen,
			navigationOptions: () => ({
				title: 'Choose a contact' 
			})
		},
		Camera:{
			screen: CameraScreen,
			navigationOptions: () => ({
				title: 'Take picture to attach to ToDo'
			})
		}
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

export default MainScreenContainer = connect(state => state.user)(MainScreen);
