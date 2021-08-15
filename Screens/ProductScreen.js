import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Header} from 'react-native-elements';
import ProductComponent from '../components/ProductComponent';
import * as LINKS from '../components/ConnectData';
import {ScrollView} from 'react-native-gesture-handler';
import {ListItem, Card, Button, Image} from 'react-native-elements';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

export default class ProductScreen extends Component {
  state = {
    products: [],
    loading: true,
    cat_id: this.props.route.params,
  };
  componentDidMount() {
    this.fetchdata();
  }
  async fetchdata() {
    await fetch(
      'http://foodcartdelivery.000webhostapp.com/phpFiles/product.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          cat_id: 3,
        }),
      },
    )
      .then(res => res.json())
      .then(json => {
        if (json.success === 1) {
          const product = json.Products;
          console.log(product);
          this.setState({
            products: product,
            loading: false,
          });
          console.log(this.state.products, this.state.loading);
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    } else {
      const {products} = this.state;
      return (
        <View style={styles.mainContainer}>
          <Header
            leftComponent={{icon: 'menu', color: 'black'}}
            centerComponent={{text: 'Products', style: {color: '#27ae60'}}}
            rightComponent={{icon: 'home', color: 'black'}}
            containerStyle={{
              backgroundColor: '#FFF',
            }}
          />
          <ScrollView>
            {products.map((v, i) => (
              <ListItem
                title={v.product_names}
                key={i}
                subtitle={
                  <>
                    <Image
                      source={{uri: v.product_images ? v.product_images : null}}
                      style={styles.proImage}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style={styles.forInnerView}>
                      <Text>{v.product_price}</Text>
                      <TouchableOpacity style={styles.proAddButt}>
                        <Text style={styles.proAddButtText}>ADD</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                }
                subtitleStyle={styles.forSubTitle}
                onPress={null}
              />
            ))}
          </ScrollView>
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
  proImage: {
    width: W / 3,
    height: H / 9,
    resizeMode: 'cover',
    marginLeft: W / 20,
    marginTop: H / 40,
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
  Container: {
    paddingHorizontal: W / 30,
  },

  forSubTitle: {
    flexDirection: 'row',
  },
  forInnerView: {
    flexDirection: 'column',
  },
});
