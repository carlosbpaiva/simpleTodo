import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, Image, View, ScrollView, Alert, Share, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import ImagePicker from 'react-native-image-picker';

import { insertTodo, updateTodo, toggleTodo, removeTodo } from '../redux/reducers/todos.actions';
import { selectContact } from '../redux/reducers/contact.actions';
import { selectImage } from '../redux/reducers/image.actions';
import styles from './TodoScreenStyles';

class Contact extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    item: PropTypes.object,
    selectedContact: PropTypes.object,
    attachContact: PropTypes.func,
  }
  attachContact = () => {
    this.props.navigation.navigate('ContactPicker', this.props.item.contact);
  }

  render() {
    let contactText = 'Tap here to select a contact from your addressbook';
    let contactStyle = styles.attachmentPlaceholder;

    if( this.props.selectedContact ) {
      contactStyle = styles.textInput;
      contactText = getContactAsText(this.props.selectedContact);
    }
    return (
      <View>
        <TouchableOpacity onPress={this.attachContact}>
          <Text style={contactStyle}>
            {contactText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const ContactContainer = connect( state => state.contact, {selectContact} )(Contact);

class CameraImage extends Component {
  static propTypes = {
    selectImage: PropTypes.func,
    selectedImage: PropTypes.string,
  }

  pickPhoto = () => {
    const options = {
      title: 'Choose a picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      }
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.error) {
        Alert.alert('ImagePicker Error: ', response.error);
        return;
      }
      if (response.didCancel) {
        return;
      }
      this.props.selectImage( 'data:image/jpeg;base64,' + response.data );
    });
  }

  render() {
    let image = (
      <Text style={styles.attachmentPlaceholder} >
        Tap here to attach a picture to your todo
      </Text>
    )
    if( this.props.selectedImage ) {
      image = (
        <Image
          style={{width: 200, height: 300, resizeMode: Image.resizeMode.contain}} 
          source={{uri: this.props.selectedImage}}
        />
      )
    }
    return(
      <TouchableOpacity 
        onPress={this.pickPhoto}>
        <View style={{justifyContent: 'space-around', alignItems:'center'}}>
          {image}
        </View>
      </TouchableOpacity>
    )
  }
}
const ImageContainer = connect( state => state.image, {selectImage} )(CameraImage);

const getContactAsText = contact => {
  let contactText = '';
  if( contact ) {
    contactText = contact.familyName
    + ',' + contact.givenName
    + ' ' + contact.middleName;
    if( contact.emailAddresses ) {
      for( let email of contact.emailAddresses ){
        contactText += '\n\t'+ email.label + ': ' + email.email;
      }
    }
    if( contact.phoneNumbers ) {
      for( let phone of contact.phoneNumbers ){
        contactText += '\n\t'+ phone.label + ': ' + phone.number;
      }
    }
  }
  return contactText;
}

  
class TodoScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    item: PropTypes.object,
    selectedContact: PropTypes.object,
    selectedImage: PropTypes.string,
    selectContact: PropTypes.func.isRequired,
    selectImage: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    insertTodo: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    let newState;
    if( props.navigation.state.params ) {
      newState = props.navigation.state.params.item;
    } else {
      newState = { title:'', text:'', completed:false, contact: null, image: null};
    }
    const {id, title, text, completed, contact, image} = newState;
    this.props.selectContact(contact);
    this.props.selectImage(image);
    this.state = {id, title, text, completed, contact, image};
  }
  
  toggleTodo = () => {
    this.setState({completed: ! this.state.completed});
  }

  removeTodo = () => {
    if( this.state.id ){
      this.props.removeTodo(this.state.id);
    }
    this.props.navigation.goBack();
  }
  
  updateTodo = () => {
    const {id, title, text, completed} = this.state;

    if( ! title ) {
      Alert.alert('Please fill-in Todo Title');
      return;
    }

    if( id ) {
      this.props.updateTodo(id, title, text, completed, 
      this.props.selectedContact, this.props.selectedImage);
    } else {
      this.props.insertTodo(title, text, completed,
      this.props.selectedContact, this.props.selectedImage);
    }
    this.props.navigation.goBack();
  }

  shareTodo = () => {
    const contactText = getContactAsText(this.props.selectedContact);
    let message = 'ToDo: ' + this.state.title;
    message += this.state.text? '\n' + this.state.text: "";
    message += `\n${this.state.completed ? '': 'Not '} Completed`;
    message += contactText ? `\n${contactText}`: '';
    Share.share({ message });
  }

  render() {
    //const iosIconName = `${this.state.completed ? 'ios-check' : 'ios-add-circle'}`;
    //const androidIconName = iosIconName;
    return (
      <View style={styles.container}>
        <View style={{ flex:9 }}>
          <ScrollView>
            <TextInput
              placeholder="Enter Todo Title"
              onChangeText = { title => this.setState({ title }) }
              value = { this.state.title }
              style={styles.textInput}
            />
            <TextInput
              multiline={true}
              placeholder="Enter Text"
              onChangeText = { text => this.setState({ text }) }
              value = {this.state.text}
              style={styles.textInput}
            />
            <Text 
              style={styles.textInput} 
              onPress={this.toggleTodo}>
              { this.state.completed ? 'Completed' : 'Not Completed'}
            </Text>
            <ContactContainer 
              item = {this.state}
              navigation = {this.props.navigation} />
            <ImageContainer 
              item = {this.state}
              navigation = {this.props.navigation} />
          </ScrollView>
          </View>
              <View style={{ flex:1, minHeight: 40}}>
              <View style={ styles.buttonBar }>
              <Text onPress={this.updateTodo} style={styles.okButton}>
              {' OK '}
            </Text>
            <Text onPress={this.shareTodo} style={styles.shareButton}>
              {' Share '}
            </Text>
            <Text onPress={this.removeTodo} style={styles.deleteButton}>
              {this.state.id ? ' Delete ' : ' Cancel '}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const TodoContainer = connect(state => ({ selectedContact: state.contact.selectedContact, selectedImage: state.image.selectedImage }),
    { insertTodo, updateTodo, toggleTodo, removeTodo, selectContact, selectImage, })(TodoScreen)

export default TodoContainer;
