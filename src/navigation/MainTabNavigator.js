import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/colors';
import Icon from '../components/Icon';

import LoginForm from '../screens/LoginForm';
import TodoListScreen from '../screens/TodoListScreen';
import TodoScreen from '../screens/TodoScreen';

/*
*/

const stackNavigator = StackNavigator(
  {
    TodoList: {
      screen: TodoListScreen,
      navigationOptions: () => ({
        title: 'To-do List'
      })
    },
    Todo: {
      screen: TodoScreen,
      navigationOptions: ({ navigation }) => ({
        title:  "${navigation.state.params.name}'s Info"
      })
    },
  }, 
  {
    initialRouteName: 'Todo',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  }
);


const tabNavigator = TabNavigator(
  {
    TodoNavigator: {
      screen: TodoScreen,
      navigationOptions: {
        tabBarLabel: 'Todos',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
          nameAndroid={focused ? 'add' : 'add-circle-outline'}
          nameIos={focused ? 'ios-add' : 'ios-add-circle-outline'}
          size={26}
          style={{ color: tintColor }}
          />
          )
      }
    },
    Login: {
      screen: LoginForm,
      navigationOptions: {
        tabBarLabel: 'Logout',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
          nameAndroid={focused ? 'format-list-bulleted' : 'list'}
          nameIos={focused ? 'ios-list' : 'ios-list-box-outline'}
          size={26}
          style={{ color: tintColor }}
          />
          )
      }
    },
  },
  {
    initialRouteName: 'TodoNavigator',
    animationEnabled: true,
    tabBarPosition: 'bottom',
    configureTransition: () => ({
      timing: Animated.spring,
      tension: 1,
      friction: 25
    }),
    swipeEnabled: true,
    activeTintColor: 'red',
  }
);

export default stackNavigator;
/*
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>HomeScreen!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Home');
  }
}

const stack= StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default stack;
*/