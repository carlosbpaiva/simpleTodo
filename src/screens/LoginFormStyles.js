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

export default styles;