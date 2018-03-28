import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Platform, Button, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

import { insertTodo, updateTodo, toggleTodo, removeTodo } from '../redux/reducers/todos.actions';
import styles from './ScreenStyles';

class TodoScreen extends Component {
 
	constructor(props) {
		super(props);
	 	let navProps;
	 	if( props.navigation.state.params ) {
			navProps = props.navigation.state.params.item;
		} else {
			navProps = { title:'', text:'', completed:false, contact:'', image:''};
		}
		const {id, title, text, completed, contact, image} = navProps;
		this.state = {id, title, text, completed, contact, image};
	}
	
	toggleTodo = () => {
		this.setState({completed: ! this.state.completed});
	}

	removeTodo = () => {
		this.props.removeTodo(this.state.id);
		this.props.navigation.goBack();
	}
	
	updateTodo = () => {
		const {id, title, text, completed, contact, image} = this.state;
		if( id ) {
			this.props.updateTodo(id, title, text, completed, contact, image);
		} else {
			this.props.insertTodo(title, text, completed, contact, image);
		}
		this.props.navigation.goBack();
	}

	render() {
		completedIconName = `${this.state.completed ? 'checked' : ''}-square-o`;

		return (
		<View style={styles.container}>
			<ScrollView>
				<TextInput
					placeholder="Enter Todo Title"
					onChangeText = { title => this.setState({ title }) }
					value = { this.state.title }
					style={styles.textInput}
				/>
				<TextInput
					multiline={true}
					placeholder="Enter Text"
					onChangeText = { text => this.setState({ text }) }
					value = {this.state.text}
					style={styles.textInput}
				/>

				<Text 
					style={styles.textInput} 
					onPress={this.toggleTodo}>
					{ this.state.completed ? 'Completed' : 'Not Completed'}
				</Text>

				<View style={ styles.buttonBar }>
	                <Button onPress={this.updateTodo} title={'OK'} />
	                {
	                	this.state.id && <Button onPress={this.removeTodo} title={'Delete'} />
	                }

	            </View>
            </ScrollView>
		</View>
	);}
}

const mapStateToProps = state => {
    return { selectedId } = state.todos;
};

const TodoContainer = connect(mapStateToProps, { insertTodo, updateTodo, toggleTodo, removeTodo })(TodoScreen)

export default TodoContainer;