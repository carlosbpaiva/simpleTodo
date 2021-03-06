import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { setFilterText, addTodo, toggleTodo } from '../redux/reducers/todos.actions';
import { selectContact } from '../redux/reducers/contact.actions';
import styles from './TodoListScreenStyles';

class TopMenu extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    filterText: PropTypes.string,
    setFilterText: PropTypes.func,
  }

  newTodo = () => 
    this.props.navigation.navigate('Todo')

  render () { 
    return(
      <View style={ styles.topMenuContainer }>
        <TextInput
          placeholder="Enter Filter Text"
          onChangeText={ text => this.props.setFilterText(text) }
          value={this.props.filterText}
          style={styles.filterText}
        />
        <Text 
          onPress={this.newTodo}
          style={styles.newTodo}
        >
          New Todo
        </Text>
      </View>
    )
  }
}
const TopmenuContainer = connect( state => state.todos, { setFilterText, addTodo } )(TopMenu);

class TodoList extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    filterText: PropTypes.string,
    toggleTodo: PropTypes.func,
    items: PropTypes.array.isRequired,
  }
  toggle = (item) => () => this.props.toggleTodo(item.id, !item.completed);


  navigateTo = (item) => () =>
  {
    this.props.navigation.navigate('Todo', { item });
  }

  render() {
    const needle = this.props.filterText.toLowerCase();
    return (
        <FlatList 
          data = {this.props.items.filter(
              item => item.title.toLowerCase().indexOf(needle) > -1
            ).map(
              item => ({...item, key:item.id}) 
            ) 
          }
          renderItem = {
            ({item}) => 
              <View style = {styles.todoListItem} key={item.id}>
                <TouchableOpacity
                  onLongPress={this.toggle(item)}
                  onPress={this.navigateTo(item)}>
                  <Text style = {item.completed ? styles.todoDone: styles.todo}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
          }
        />
    )
  }
}
const TodoListContainer = connect( state => ({...state.todos, ...state.user}), {toggleTodo, selectContact} )(TodoList);

export default class TodoListScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }
  render() {
    return (
      <View style = {styles.mainContainer}>
        <TopmenuContainer  navigation={this.props.navigation}/>
        <View style = {styles.todoListContainer}>
          <TodoListContainer  navigation={this.props.navigation}/>
        </View>
      </View>
   );
  }
}

