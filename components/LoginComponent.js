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
//import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, SocialIcon} from 'react-native-elements';
import * as LINKS from './ConnectData';
//import HomeScreen from '../Screens/HomeScreen';
//import NavScreen from '../Screens/NavScreen';
let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

export default class LoginComponent extends Component {
  state = {
    email: '',
    password: '',
  };
  loginProcess = async () => {
    const {email, password} = this.state;
    if (email === '' || password === '') {
      Alert.alert('Please Enter All Details ');
    } else {
      fetch(LINKS.LOGIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email, //JSON : JS
          password: password,
        }),
      })
        .then(res => res.json())
        .then(json => {
          Alert.alert(json.message);
          if (json.success === 1) {
            let userdata = json.user;
            console.log(userdata);
            this.props.navigation.navigate('Home', userdata);
          }
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/frus.png')} />
        </View>
        <Text style={styles.topText}>Login</Text>
        <Input
          placeholder="Email"
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
          value={this.state.email}
          onChangeText={emailid => {
            this.setState({email: emailid});
          }}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={{type: 'font-awesome', name: 'key'}}
          value={this.state.password}
          onChangeText={pass => {
            this.setState({password: pass});
          }}
        />
        <TouchableOpacity>
          <Text style={styles.midText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.loginProcess}>
          <Text style={styles.upperButt}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Don't, have an account?</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.lowerButt}>CREATE</Text>
        </TouchableOpacity>
        <View style={styles.iconStyle}>
          <TouchableOpacity>
            <SocialIcon raised={true} type="facebook" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon raised={true} type="google" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: W,
    height: H,
    //paddingTop: H / 5,
    paddingHorizontal: W / 30,
    backgroundColor: '#FFF',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: 20,
  },
  logo: {
    width: W * 0.9,
    height: H / 2.9,
    resizeMode: 'cover',
  },
  topText: {
    paddingLeft: W / 30,
    fontSize: W / 20,
    fontWeight: 'bold',
    color: '#a6a8a2',
    marginBottom: H / 30,
    //textDecorationLine: 'underline',
  },
  inputField: {
    color: 'green',
  },
  midText: {
    paddingHorizontal: W / 30,
    marginBottom: H / 30,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  upperButt: {
    fontWeight: 'bold',
    backgroundColor: '#27ae60',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    borderRadius: 5,
    padding: W / 30,
    marginBottom: H / 16,
  },
  bottomText: {
    color: '#27ae60',
    textAlign: 'center',
    marginBottom: H / 80,
  },
  lowerButt: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    borderColor: '#27ae60',
    color: '#27ae60',
    borderWidth: 1,
    borderRadius: 5,
    padding: W / 30,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
