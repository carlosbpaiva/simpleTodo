import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text, TextInput, View, StyleSheet, ScrollView, Alert, Share} from 'react-native';
import { connect } from 'react-redux';
import Icon from '../components/Icon';
import Colors from '../constants/colors';

import { insertTodo, updateTodo, toggleTodo, removeTodo } from '../redux/reducers/todos.actions';
import { selectContact } from '../redux/reducers/contact.actions';
import styles from './TodoScreenStyles';

class Contact extends Component {

	attachContact = () => {
   		this.props.navigation.navigate('ContactPicker', this.props.item.contact);
	}

	render() {
		let contactText = 'Tap here to select a contact from your addressbook';
		let contactStyle = styles.attachmentPlaceholder;

		if( this.props.selectedContact ) {
			contactStyle = styles.textInput;
			contactText = getContactAsText(this.props.selectedContact);
		}
		return (
			<View>
				<Text style={contactStyle} onPress={this.attachContact}>
					{contactText}
				</Text>
			</View>
		)
	}
}
const ContactContainer = connect( state => state.contact, {selectContact} )(Contact);

const getContactAsText = contact => {
	let contactText = '';
	if( contact ) {
		contactText = contact.familyName
			+ ',' + contact.givenName
			+ ' ' + contact.middleName;
		for( let email of contact.emailAddresses ){
			contactText += '\n\t'+ email.label + ': ' + email.email;
		}
		for( let phone of contact.phoneNumbers ){
			contactText += '\n\t'+ phone.label + ': ' + phone.number;
		}
	}
	return contactText;
}

	
class TodoScreen extends Component {
	constructor(props) {
		super(props);
	    console.log(props); 
	 	let newState;
	 	if( props.navigation.state.params ) {
			newState = props.navigation.state.params.item;
		} else {
			newState = { title:'', text:'', completed:false, contact: null, image:''};
		}
		const {id, title, text, completed, contact, image} = newState;
		this.props.selectContact(contact);
		this.state = {id, title, text, completed, contact, image};
	}
	
	toggleTodo = () => {
		this.setState({completed: ! this.state.completed});
	}

	removeTodo = () => {
		if( this.state.id ){
			this.props.removeTodo(this.state.id);
		}
		this.props.navigation.goBack();
	}
	
	updateTodo = () => {
		console.log(this.props)
		const {id, title, text, completed, contact, image} = this.state;

		if( ! title ) {
			Alert.alert('Please fill-in Todo Title');
			return;
		}

		if( id ) {
			this.props.updateTodo(id, title, text, completed, 
				this.props.selectedContact, image);
		} else {
			this.props.insertTodo(title, text, completed,
				this.props.selectedContact, image);
		}
		this.props.navigation.goBack();
	}

	shareTodo = () => {
		const contactText = getContactAsText(this.props.selectedContact);
		let message = 'ToDo: ' + this.state.title;
		message += this.state.text? '\n' + this.state.text: "";
		message += `\n${this.state.completed ? '': 'Not '} Completed`;
		message += contactText ? `\n${contactText}`: '';
		Share.share({ message });
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
					<ContactContainer 
						item = {this.state}
						navigation = {this.props.navigation} />
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
                	<Text onPress={this.removeTodo} style={styles.deleteButton}>
                		{this.state.id ? ' Delete ' : ' Cancel '}
                	</Text>
	            </View>
	            <Text style={styles.errorText}>
	            	{this.state.error}
            	</Text>
	         </View>
		</View>
	);}
}

const TodoContainer = connect(state => state.contact,
		{ insertTodo, updateTodo, toggleTodo, removeTodo, selectContact })(TodoScreen)

export default TodoContainer;