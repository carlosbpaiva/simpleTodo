import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, Alert, TouchableOpacity, FlatList} from 'react-native';
import { connect } from 'react-redux';
import Contacts from 'react-native-contacts';

import {  selectContact } from '../redux/reducers/contact.actions';
import styles from './ContactPickerScreenStyles';

class ContactPickerScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    selectContact: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {filterText: '', contactList: []};
    Contacts.getContactsMatchingString("John", (err) => {
      if(err === 'denied'){
        Alert.alert("App DOES NOT have access to Contacts!");
        this.props.navigation.goBack();
      }
    })
  }

  filterContacts = () => {
    Contacts.getContactsMatchingString( this.state.filterText, (error, contacts) => {
      if( error ) {
        Alert.alert(error);
      } else {
        this.setState({contactList: contacts});
      }
    } )
  }

  selectContact = (item) => () => {
    this.props.selectContact(item);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.searchBar}> 
          <TextInput placeholder="Search Contacts"
            onChangeText={ filterText => this.setState({ filterText }) }
            value={this.state.filterText}
            style={styles.filterText}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
          <Text 
            style={styles.goSearch}
            onPress={ this.filterContacts }
          > Search 
          </Text>
        </View>
        <View style={{height:600}} >
          <FlatList 
            style={styles.contactList} 
            data = {
              this.state.contactList.map( contact => ({...contact, key:contact.recordID}) )
            }
            renderItem = { ({item}) => 
              <TouchableOpacity onPress={this.selectContact(item)}>
                <Text style = {styles.contact}>
                  {`${item.familyName}, ${item.givenName} ${item.middleName}`}
                </Text>
              </TouchableOpacity>
            }
          >
          </FlatList>
        </View>
      </View>
    ) 
  }
}

const container = connect( state => state.contact, { selectContact} )(ContactPickerScreen);
export default container;
