import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Header, Image} from 'react-native-elements';
import HomeComponent from '../components/HomeComponent';
import * as LINKS from '../components/ConnectData';
import {ScrollView} from 'react-native-gesture-handler';

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
        <ScrollView>
          <View style={styles.container}>
            {this.state.loading ? (
              <ActivityIndicator />
            ) : (
              this.state.category.map((data, index) => (
                <View key={index}>
                  <View>
                    <HomeComponent values={data} nav={this.props.navigation} />
                  </View>
                </View>
              ))
            )}
          </View>
        </ScrollView>
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
    //marginHorizontal: W / 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //paddingHorizontal: 10,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
});
