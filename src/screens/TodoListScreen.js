import React from 'react';
import { Button, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { setFilterText, addTodo, toggleTodo } from '../redux/reducers/todos.actions';
import styles from './ScreenStyles';

class TopMenu extends React.Component {
  mockTodo = () => this.props.addTodo ('New Todo'+Math.random(1), 'Some Text', true, { 'name':'john'}, 'file://image.jpg');
  // ()=> this.props.navigation.navigate('Todo')
  render () { 
    return(
      <View style={styles.topMenu} >
        <TextInput
          placeholder="Enter Filter Text"
          onChangeText={ text => this.props.setFilterText(text) }
          value={this.props.filterText}
          style={styles.FilterText}
        />
        <Button onPress={this.mockTodo} title="New Todo" />
      </View>
    )
  }
}

TopMenu = connect( state => state.todos, { setFilterText, addTodo } )(TopMenu);

class TodoList extends React.Component {
  toggle = (item) => () =>
  {
    this.props.toggleTodo(item.id);
  }
  render() {
    toggle = (item) => this.props.toggle(item);
    regExp = new RegExp(this.props.filterText, 'i');
    return (
      <View style = {styles.todoList} >
        <FlatList 
          data = {this.props.items.filter(
              item => item.title.search(regExp) > -1
            ).map(
              item => ({...item, key:item.id}) 
            ) 
          }
          renderItem = {
            ({item}) => 
              <View style = {styles.todoListItem} key={item.id}>
                <TouchableOpacity onPress={this.toggle(item)}>
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

const TodoListContainer = connect( state => state.todos, {toggleTodo} )(TodoList);


export default class TodoListScreen extends React.Component {
  static navigationOptions = {
    title: 'Todoooooooo Items',  
  };

  render() {
    return (
       <SafeAreaView style={{ flex: 1, width: '100%', backgroundColor: 'white' }}>
       <TopMenu />
        <TodoListContainer />
      </SafeAreaView>

    );
  }
}


const deprecated_styles = StyleSheet.create({
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
