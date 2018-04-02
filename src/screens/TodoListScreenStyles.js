import { StyleSheet } from 'react-native';
import { Image } from 'react-native';


const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},

    topMenuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    	alignItems: 'center',
        marginLeft: 10,
        marginRight:10,
    },

    filterText: {
	    fontSize: 18,
	    flex:7,
    },

    newTodo: {
    	flex: 3,
	    fontSize: 18,
        height:30,
    	backgroundColor: 'green',
    	color: 'white',
    	textAlign: 'center',
        paddingTop:3,
    },

	todoListContainer:{
	  flex:12,
	  flexDirection : 'column',
	  alignItems: 'flex-start',
	  justifyContent: 'flex-start',
	  width: '90%',
	},	

	todoListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 10,
	},

    todoDone: {
        fontSize: 20,
        color: 'green',
        textDecorationLine: 'line-through'
    },

    todo: {
        fontSize: 20,
        color: 'red',
    },

    picture: {
        width: 200,
        height: 300,
        justifyContent:'center',
        resizeMode: Image.resizeMode.contain,
    }
});

export default styles;