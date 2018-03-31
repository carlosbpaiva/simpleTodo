import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},


    goSearch: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'green',
        height: 30,
        width:80,
        textAlign: 'center',
        paddingTop: 3,
    },

    searchBar: {
        marginLeft: 10,
        marginRight:10,
    },

    filterText: {
        margin: 10,
	    fontSize: 18,
    },

	contactList:{
        marginLeft: 10,
        marginTop: 10,
	},	

    contact: {
        fontSize: 18,
        marginBottom: 3,
  },
});

export default styles;