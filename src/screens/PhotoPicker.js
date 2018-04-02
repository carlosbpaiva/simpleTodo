import React, { Component } from 'react';
import {
  Image,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  CameraRoll,
  Alert,
} from 'react-native';
import Permissions from 'react-native-permissions'
import { connect } from 'react-redux';
import { selectImage } from '../redux/reducers/image.actions';

class PhotoPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { photoArray: [] };
  }

  componentDidMount() {
    /*
    Permissions.check('photo').then(response => {
      if( response !== 'authorized' ) {
        Permissions.check('photo').then(response => {
          if( response !== 'authorized' ) {
            this.props.navigation.goBack();
            return;
          }
        })
      }
    })
      */  
      let photoArray = this.loadPhotos();
      this.setState = { photoArray: photoArray };
  }
  
  loadPhotos() {
      CameraRoll.getPhotos({ first: 1000000 })
        .then(res => {
          return res.edges;
        }
      ).catch( function (err) {
           Alert.alert(err.message);
          throw err;
        })
      return [];
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        onPress={() => this.setState( this.props.selectImage(rowData.node.image.uri) )}>
        <Image
          source={{ uri: rowData }}
          style={styles.image} />
      </TouchableHighlight>
    )
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Pick A Photo </Text>
        </View>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={ds.cloneWithRows(this.state.photoArray)}
          renderRow={(rowData) => this.renderRow(rowData)}
          enableEmptySections={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  image: {
    width: 110,
    height: 120,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#979797'
  }
})

const PhotoPickerContainer = connect( state => state.image, { selectImage } )(PhotoPicker);
export default PhotoPickerContainer;