import React, {Component} from 'react';
import {Divider, SocialIcon} from 'react-native-elements';

import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
export default class FirstScreen extends Component {
  doThis(nav) {
    if (nav === 'register') {
      this.props.navigation.navigate('Register');
    } else if (nav === 'login') {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image style={style.logo} source={require('../assets/girl.jpg')} />
        </View>
        <View style={style.buttContainer}>
          <TouchableOpacity onPress={() => this.doThis('register')}>
            <Text style={style.buttText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.doThis('login')}>
            <Text style={style.buttText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={style.divStyle}>
          <Divider style={{backgroundColor: '#27ae60'}} />
        </View>
        <View>
          <TouchableOpacity>
            <Text style={style.browseProducts}>
              Skip sign in & browse products
            </Text>
          </TouchableOpacity>
        </View>
        <Divider style={{backgroundColor: '#27ae60'}} />
        <View style={style.iconStyle}>
          <TouchableOpacity>
            <SocialIcon raised={true} type="facebook" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon raised={true} type="github" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon raised={true} type="instagram" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: H,
    width: W,
    flex: 3,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: W,
    height: H / 1.6,
  },
  buttContainer: {},
  buttText: {
    backgroundColor: '#27ae60',
    //fontWeight: 'bold',
    padding: H / 70,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    color: '#fff',
    borderRadius: 5,
  },
  divStyle: {
    marginBottom: 10,
  },
  browseProducts: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
  },
  iconStyle: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
