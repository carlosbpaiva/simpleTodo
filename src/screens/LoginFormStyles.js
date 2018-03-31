import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'flex-start',
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
        marginBottom: 20,
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

   loginButton: {
        fontSize: 18,
        height:30,
        width:80,
        backgroundColor: 'green',
        color: 'white',
        textAlign: 'center',
        paddingTop:3,
    },

   signupButton: {
        fontSize: 18,
        height:30,
        width:80,
        backgroundColor: 'rgb(255,188,8)',
        color: 'white',
        textAlign: 'center',
        paddingTop:3,
    },

});

export default styles;