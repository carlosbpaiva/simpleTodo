import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Platform, Button, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

import { addTodo, updateTodo, toggleTodo, removeTodo } from '../redux/reducers/todos.actions';
import styles from './ScreenStyles';

class TodoScreen extends Component {
 
	constructor(props) {
		super(props);
		const {id, title, text, completed, contact, image} = props;
		this.state = {id, title, text, completed, contact, image};
	}
	
	updateTodo = () => {
		if( this.props.selectedId ) {
			this.props.updateTodo(title, text, completed, contact, image);
		} else {
			const { title, text, completed, contact, image } = this.state;
			this.props.addTodo(title, text, completed, contact, image);
		}
	}

	render() {
		completedIconName = Platform.OS === 'ios'
			? `ios-home-${this.state.completed ? 'filled' : 'outline'}`
			: 'android-checkbox-outline-blank';

		return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<TextInput
					placeholder="Enter Todo Title"
					onChangeText = { title => this.setState({ title }) }
					style={styles.textInput}
				/>
				<TextInput
					multiline={true}
					placeholder="Enter Text"
					onChangeText = { text => this.setState({ text }) }
					style={styles.textInput}
				/>

				<Ionicons
					name={completedIconName}
					size={22}
					style={{ marginBottom: -3 }}
					color={Colors.tabIconDefault}
				/>

				<View style={ styles.buttonBar }>
	                <Button onPress={this.updateTodo} title={'OK'} />
	                <Button onPress={this.navigateBack} title={'Cancel'} />
	            </View>
            </ScrollView>
		</SafeAreaView>
	);}
}

const mapStateToProps = state => {
    return { selectedId } = state.todos;
};

const TodoContainer = connect(mapStateToProps, { addTodo, updateTodo, toggleTodo, removeTodo })(TodoScreen)

export default TodoContainer;