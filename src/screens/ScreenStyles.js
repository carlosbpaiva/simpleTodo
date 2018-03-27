import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    todoListContainer:{
        flex:1,
        flexDirection : 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: '90%',
    },
    topMenuContainer: {
        flex:1,
        height:30,
    },

    topMenu: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 15,
    },

	container: {
		flex: 1,
        justifyContent: 'flex-start',
		width: '90%',
		marginTop: 50,
		margin: 20,
	},

    FilterText: {
        fontSize: 18,
        textAlign: 'left',
        marginTop: 5,
        height:30
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