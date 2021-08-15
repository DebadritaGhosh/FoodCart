import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
export default class HomeComponent extends Component {
  render() {
    const values = this.props.values;
    const nav = this.props.nav;
    return (
      <View style={styles.cards}>
        <TouchableOpacity
          onPress={() => nav.navigate('Product', {cat_id: values.cat_id})}>
          <Image style={styles.catImage} source={{uri: values.cat_picture}} />
          <Text style={styles.catText}> {values.cat_name} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: '#fff',
    height: H / 7,
    marginTop: H / 100,
    //width: W / 3.2,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowColor: '#000',
    borderWidth: 2,
    borderColor: '#f7f7f7',
  },
  catImage: {
    width: W / 3.42,
    height: H / 10,
    resizeMode: 'cover',
  },
  catText: {
    textAlign: 'center',
    marginTop: H / 120,
    color: 'black',
    fontWeight: 'bold',
    //backgroundColor: 'green',
    //fontSize: 16,
  },
});
