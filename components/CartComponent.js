import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

export default class ProductComponent extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.product}>
          <View>
            <Image
              style={styles.proImage}
              source={require('../assets/snack.png')}
            />
          </View>
          <View style={styles.proDetails}>
            <Text style={styles.proName}>Carrots</Text>
            <Text style={styles.proPrice}>$0.04</Text>
            <TouchableOpacity style={styles.proAddButt}>
              <Text style={styles.proAddButtText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: '#fff',
    height: H / 6,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    shadowOpacity: 1,
    shadowColor: '#000',
    borderWidth: 2,
    borderColor: '#f7f7f7',
    marginTop: 10,
  },
  proImage: {
    width: W / 3,
    height: H / 9,
    resizeMode: 'cover',
    marginLeft: W / 20,
    marginTop: H / 40,
  },
  proDetails: {
    marginLeft: W / 20,
    marginTop: H / 40,
  },
  proName: {
    fontWeight: 'bold',
    fontSize: W / 18,
    color: '#27ae60',
  },
  proPrice: {
    //fontWeight: 'bold',
    fontSize: W / 28,
    marginTop: H / 150,
  },
  proAddButt: {
    marginTop: H / 80,
    fontWeight: 'bold',
    //fontSize: W / 15,
    backgroundColor: '#27ae60',
    alignItems: 'center',
    borderRadius: 10,
  },
  proAddButtText: {
    fontSize: W / 30,
    color: '#fff',
    padding: 10,
  },
});
