import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Header} from 'react-native-elements';
import HomeComponent from '../components/HomeComponent';
import * as LINKS from '../components/ConnectData';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

export default class HomeScreen extends Component {
  state = {
    category: [],
    loading: true,
  };
  async fetchdata() {
    await fetch(LINKS.CATEGORIES, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => {
        if (json.success === 1) {
          const category = JSON.parse(json.categories);
          this.setState({
            category: category,
            loading: false,
          });
          // console.log(this.state.category);
        }
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchdata();
  }
  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    } else {
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
          {this.state.category.map((values, index) => {
            //console.log(values);
            <Text>{values.cat_name}</Text>;
            {
              /* <View style={styles.container}>
              <View key={index} style={styles.cardsParent}>
                <HomeComponent values={values} />
              </View>
            </View> */
            }
          })}
        </View>
      );
    }
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
    //backgroundColor: '#000',
    //marginHorizontal: W / 30,
  },
  cardsParent: {
    display: 'flex',
    marginTop: H / 7,
    //flex: 1,
    height: H / 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor: '#fff',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
});
