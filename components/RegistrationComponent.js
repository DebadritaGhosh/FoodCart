import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, SocialIcon} from 'react-native-elements';
//import GlobalFont from 'react-native-global-font';
import * as LINKS from './ConnectData';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
export default class RegistrationComponent extends Component {
  state = {
    email: '',
    password: '',
    confipass: '',
    phonenum: '',
    pin: '',
  };
  registerProcess = () => {
    let email_validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pass_validation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const {email, password, confipass, phonenum, pin} = this.state;
    if (
      email === '' ||
      password === '' ||
      confipass === '' ||
      phonenum === '' ||
      pin === ''
    ) {
      Alert.alert('Please Enter All Details ');
    } else {
      if (email_validation.test(email)) {
        if (pass_validation.test(password)) {
          if (password !== confipass) {
            Alert.alert('Please Confirm Your Password ');
          } else {
            //Alert.alert('Registration Complete');

            fetch(LINKS.REGISTRATION, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
              },
              body: JSON.stringify({
                email: email, //JSON : JS
                password: password,
                phonenum: phonenum,
                pin: pin,
              }),
            })
              .then(res => res.json())
              .then(json => {
                Alert.alert(json.message);
                if (json.success === 1) {
                  this.props.navigation.navigate('Login');
                }
              })
              .catch(err => console.log(err));
          }
        } else {
          Alert.alert(
            'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
          );
        }
      } else {
        Alert.alert('Please check your email');
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Create Account</Text>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
          value={this.state.email}
          onChangeText={emailid => {
            this.setState({email: emailid});
          }}
        />
        <Input
          placeholder="Contact No"
          keyboardType="numeric"
          autoCorrect={false}
          leftIcon={{type: 'font-awesome', name: 'phone'}}
          value={this.state.phonenum}
          onChangeText={contact => {
            this.setState({phonenum: contact});
          }}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={{type: 'font-awesome', name: 'key'}}
          value={this.state.password}
          onChangeText={pass => {
            this.setState({password: pass});
          }}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          leftIcon={{type: 'font-awesome', name: 'key'}}
          value={this.state.confipass}
          onChangeText={cpass => {
            this.setState({confipass: cpass});
          }}
        />
        <Input
          placeholder="PIN code"
          keyboardType="numeric"
          autoCorrect={false}
          leftIcon={{type: 'font-awesome', name: 'map-marker'}}
          value={this.state.pin}
          onChangeText={pincode => {
            this.setState({pin: pincode});
          }}
        />
        <TouchableOpacity>
          <Text style={styles.midText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.registerProcess}>
          <Text style={styles.upperButt}>CREATE</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Already, have an account?</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.lowerButt}>LOGIN</Text>
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
    paddingTop: H * 0.05,
    paddingHorizontal: W / 30,
    backgroundColor: '#FFF',
  },
  topText: {
    paddingLeft: W / 30,
    fontSize: 45,
    fontWeight: 'bold',
    //color: '#a6a8a2',
    color: '#27ae60',
    marginBottom: 20,
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
    marginBottom: H / 25,
  },
  bottomText: {
    color: '#27ae60',
    textAlign: 'center',
    marginBottom: H / 90,
  },
  lowerButt: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: H / 50,
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
