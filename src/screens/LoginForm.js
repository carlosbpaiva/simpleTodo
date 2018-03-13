//LoginForm.js
import React, { Component } from 'react';
import { View, Button, SafeAreaView, StyleSheet, Text, ActivityIndicator } from 'react-native';
import '../components/TitledInput';
import * as firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };


    onLoginPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: 'Login OK', loading: false }); })
            .catch((err) => {
                    this.setState( { error: 'Authentication failed: '+err, loading: false } );
                    return;
            });
    };

    onSignUpPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: 'User Created!', loading: false }); })
            .catch((err) => {
                this.setState({ error: 'Unable to create user: '+err, loading: false });
            });
    };
 
	renderButtonOrSpinner() {
        if (this.state.loading) {
            <ActivityIndicator size={'small'}/>    
        }
        return(
            <View style={ styles.buttonBar }>
                <Button onPress={this.onLoginPress.bind(this)} title={'Log in'} />
                <Button onPress={this.onSignUpPress.bind(this)} title={'Sign Up'} />
            </View>
            )
	}

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
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                {this.renderButtonOrSpinner()}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		marginTop: 50,
		margin: 20,
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
    smallText: {
        fontSize: 12,
        textAlign: 'center',
        margin: 0,
        marginBottom: 0,
    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonBar: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    },
});

export default LoginForm;