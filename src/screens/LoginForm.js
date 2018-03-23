//LoginForm.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, SafeAreaView, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { login, logout } from '../redux/reducers/user.actions';

import styles from './LoginFormStyles';
import '../components/TitledInput';


class LoginForm extends Component {
    state = { email: '', password: '' };

    onLoginPress = () => {
        this.props.login( this.state.email, this.state.password )
    };

    onSignUpPress = () => {
        const { email, password } = this.state;
    };
 
	renderButtonOrSpinner() {
        if (this.props.loading) {
            <ActivityIndicator size={'small'}/>    
        }
        return(
            <View style={ styles.buttonBar }>
                <Button onPress={this.onLoginPress} title={'Log in'} />
                <Button onPress={this.onSignUpPress} title={'Sign Up'} />
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

const mapStateToProps = state => {
    const props = { user, loggedIn, loading, error } = state.user;
    return props;
};

const LoginContainer = connect(mapStateToProps, { login, logout })(LoginForm)

export default LoginContainer
