import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import HomeComponent from '../components/HomeComponent';
import * as LINKS from '../components/ConnectData';
import CartComponent from '../components/CartComponent';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

export default class CartScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header
          leftComponent={{icon: 'menu', color: 'black'}}
          centerComponent={{text: 'Home', style: {color: '#27ae60'}}}
          rightComponent={{icon: 'home', color: 'black'}}
          containerStyle={{
            backgroundColor: '#FFF',
          }}
        />
        <View style={styles.container}>
          <View style={styles.cardsParent}>
            <TouchableOpacity>
              <CartComponent />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    width: W,
    height: H,
  },
  container: {
    height: H,
    width: W,
    backgroundColor: '#fff',
    //marginHorizontal: W / 30,
  },
  cardsParent: {
    display: 'flex',
    marginTop: H / 7,
    //flex: 1,
    height: H / 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
});
