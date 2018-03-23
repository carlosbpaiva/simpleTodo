import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'flex-start',
		width: '90%',
		marginTop: 50,
		margin: 20,
	},
	topMenu: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginLeft: 15,
    },

    FilterText: {
        fontSize: 18,
        textAlign: 'left',
        marginTop: 5,
    },
    todoList: {
        flex: 10,
        width: '100%',
        backgroundColor: 'white'
    },
    text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
    },
    textInput: {
        fontSize: 20,
        margin: 10,
    },
    textMultilineInput: {
        fontSize: 20,
        margin: 10,
        height: 200,
    },
    multiLineView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
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
});

export default styles;