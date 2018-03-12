import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { todoTitleChange, addTodo, toggleTodo } from '../actions';

let TodoTitle =  ({userInputs, todoTitleChange}) =>
  ( 
    <TextInput
      placeholder="Enter Title"
      onChangeText={todoTitleChange}
      value={userInputs.todoTitle}
      style={styles.todoTitle}
     />
  )
//
TodoTitle = connect(
  state => ( { userInputs: state.userInputs } ),
  dispatch => ( 
                { 
                  todoTitleChange: (element) => dispatch( todoTitleChange(element) ) 
                }
              )
)(TodoTitle);
//Declare Buttons
let OkButton = ({state, addTodo}) =>
  (
    <View style = {styles.buttonBar}>
      <Button onPress={()=>addTodo(state.userInputs.todoTitle)} title="OK" />
      <Button onPress={()=>addTodo(state.userInputs.todoTitle)} title="Cancel" />
    </View>
  )

// Buttons
OkButton = connect(
  state => ( { state: state } ),
  dispatch => ( 
                { 
                  addTodo: (element) => dispatch( addTodo(element) )
                } 
              )
) (OkButton);
//
class TodoList extends React.Component {
  toggleTodo = (item) => () =>
  {
    this.props.toggleTodo(item.id);
    console.log(item);
  }
  render() {
    return (
      <View style = {styles.todoList} >
        <FlatList 
          data = {this.props.state.todos.map(item => ({...item, key:item.id}) ) }
          renderItem = {
            ({item}) =>
              <View style = {styles.todoListItem} key={item.id}>
                <TouchableOpacity onPress={this.toggleTodo(item)}>
                  <Text style = {item.completed ? styles.todoDone: styles.todo}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
          }
        />
      </View>
    )
  }
}

TodoList = connect(
  state => ( { state: state } ),
  dispatch => ( 
                { 
                  toggleTodo: (element) => dispatch( toggleTodo(element) )
                } 
              )
) (TodoList);

//
export default TodoListScreen = ({state, addTodo}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoTitle />
      <OkButton />
      <TodoList />
    </SafeAreaView>
  );
}

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  todoTitle: {
    padding: 20,
    fontSize: 18,
    color: '#333',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  buttonBar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  todoList: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  todoListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  todoDone: {
    fontSize: 20,
    color: 'green',
  },
  todo: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
  },
});
