//LoginForm.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, SafeAreaView, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { login, logout, signup, loginFailure } from '../redux/reducers/user.actions';

import styles from './LoginFormStyles';
import '../components/TitledInput';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = { email: props.email, password: props.password, error: props.error };        
    }

    validateUser = (email, password) => {
        if( ! email ) { 
          this.props.loginFailure('Please input your email address ');
          return false;
        }
        if( ! password  ) {
          this.props.loginFailure('Please input your password');
          return false;
        }
        return true;
    }

    onLoginPress = () => {
        const { email, password } = this.state;
        if( this.validateUser( email, password ) ) {
            this.props.login( email, password );
        }
    };

    onSignUpPress = () => {
        const { email, password } = this.state;
        if( this.validateUser( email, password ) ) {
            this.props.signup( email, password );
        }
    };
 
	renderButtonOrSpinner() {
        if (this.props.loading) {
            <ActivityIndicator size={'small'}/>    
        }
        return(
            <View style={ styles.buttonBar }>
                <Text onPress={this.onLoginPress} style={styles.loginButton}> Log in </Text>
                <Text onPress={this.onSignUpPress} style={styles.signupButton}> Sign Up </Text>
            </View>
            )
	}
//
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>
                    Simple ToDo App
                </Text>
                <Text style={styles.smallText}>
                    Please Log In or Sign Up to continue
                </Text>                
                <TitledInput
                    label = 'Email Address'
                    placeholder = 'you@domain.com'
                    value = {this.state.email}
                    onChangeText = {email => this.setState({ email })}
                    autoCorrect = {false}
                    autoCapitalize = 'none'
                />
                <TitledInput 
                    label = 'Password'
                    autoCorrect = {false}
                    placeholder = '*******'
                    secureTextEntry
                    value = {this.state.password}
                    onChangeText = {password => this.setState({ password })}
                    autoCapitalize = 'none'
                />
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                {this.renderButtonOrSpinner()}
            </SafeAreaView>
        );
    }
}

const LoginContainer = connect(state => state.user, { signup, login, logout, loginFailure })(LoginForm)

export default LoginContainer
