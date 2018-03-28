import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '90%',
    },

    textInput: {
        fontSize: 20,
        margin: 10,
    },

    buttonBar: {
        flexDirection: 'row-reverse',
        flex: 1,
        justifyContent: 'space-between',
        left: 20,
    },

   okButton: {
        fontSize: 18,
        height:30,
        width:80,
        backgroundColor: 'green',
        color: 'white',
        textAlign: 'center',
        paddingTop:3,
    },

   deleteButton: {
        fontSize: 18,
        height:30,
        width:80,
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        paddingTop:3,
    },

   errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'left',
    },



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
});

export default styles;