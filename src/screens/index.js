import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import TodoScreen from './TodoScreen';
import TodoListScreen from './TodoListScreen';
import ContactPickerScreen from './ContactPickerScreen';

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
	},
	{
		initialRouteName: 'TodoList',
	}
);

class MainScreen extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
  }
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
const MainScreenContainer = connect(state => state.user)(MainScreen);
export default MainScreenContainer;
