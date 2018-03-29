import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text, TextInput, View, StyleSheet, ScrollView, Alert, Share} from 'react-native';
import { connect } from 'react-redux';
import Icon from '../components/Icon';
import Colors from '../constants/colors';

import { insertTodo, updateTodo, toggleTodo, removeTodo } from '../redux/reducers/todos.actions';
import styles from './TodoScreenStyles';

class Contact extends Component {

	attachContact = () => {
		return( Alert.alert('Future Implementation') );
	}

	render() {
		if( ! this.props.contact ) {
			return (
				<View>
					<Text style={styles.attachmentPlaceholder} onPress={this.attachContact}>
						Tap here to select a contact from your addressbook
					</Text>
				</View>
			)
 		} else {
			return (
				<View>
					<Text>
						Contact Info Goes Here
					</Text>
				</View>
			);
		}
	}
}

/*
else {
			return (
				<View>
					<Text style={{color='gray'}}>
						Tap here to select a contact from your addressbook
					</Text>
				</View>
			)
		}
*/

class TodoScreen extends Component {
 
	constructor(props) {
		super(props);
	 	let newState;
	 	if( props.navigation.state.params ) {
			newState = props.navigation.state.params.item;
		} else {
			newState = { title:'', text:'', completed:false, contact:'', image:''};
		}
		const {id, title, text, completed, contact, image} = newState;
		this.state = {id, title, text, completed, contact, image, error: props.error};
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
		if( ! title ) {
			this.setState({error:'Todo Title must not be left blank Todo Title must not be left blank Todo Title must not be '});
			return;
		}
		if( id ) {
			this.props.updateTodo(id, title, text, completed, contact, image);
		} else {
			this.props.insertTodo(title, text, completed, contact, image);
		}
		this.props.navigation.goBack();
	}

	shareTodo = () => {
		Share.share({
			message: 'ToDo: ' + this.state.title  + '\n'
				+ this.state.text + '\n'
				+ `${this.state.completed ? '': 'Not '} Completed`,
		})
	}

	render() {
		const iosIconName = `${this.state.completed ? 'ios-check' : 'ios-add-circle'}`;
		const androidIconName = iosIconName;
		return (
		<View style={styles.container}>
			<View style={{ flex:9 }}>
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
					<Contact />
	            </ScrollView>
	        </View>
			<View style={{ flex:1, minHeight: 40}}>
 				<View style={ styles.buttonBar }>
	                <Text onPress={this.updateTodo} style={styles.okButton}>
	                	{' OK '}
	                </Text>
	                <Text onPress={this.shareTodo} style={styles.shareButton}>
	                	{' Share '}
	                </Text>
	                {
	                	this.state.id || <Text onPress={this.removeTodo} style={styles.deleteButton}>
					                		{' Delete '}
					                	</Text>
	                }
	            </View>
	            <Text style={styles.errorText}>
	            	{this.state.error}
            	</Text>
	         </View>
		</View>
	);}
}

const mapStateToProps = state => {
    return { todos } = state.todos;
};

const TodoContainer = connect(mapStateToProps, { insertTodo, updateTodo, toggleTodo, removeTodo })(TodoScreen)

export default TodoContainer;