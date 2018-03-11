//LoginForm.js
import React, { Component } from 'react';
import { View, Button, SafeAreaView, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { TitledInput } from '../components/TitledInput';
import * as firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };


    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((okmsg) => { this.setState({ error: okmsg, loading: false }); })
                    .catch((err) => {
                        this.setState({ error: 'Authentication failed.'+err, loading: false });
                    });
            });
    };


 
	renderButtonOrSpinner() {
        if (this.state.loading) {
            <ActivityIndicator size={'small'}/>    
        }
        return <Button onPress={this.onLoginPress.bind(this)} title={'Log in'} />;
	}

    render() {
    	debugger;
        return (
            <SafeAreaView style={styles.container}>
            	<Text style={styles.text}>
            		Simple ToDo App
        		</Text>
                <TitledInput
                    label='Email Address'
                    placeholder='you@domain.com'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TitledInput 
                    label='Password'
                    autoCorrect={false}
                    placeholder='*******'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
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
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default LoginForm;