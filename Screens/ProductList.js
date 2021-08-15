import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ListItem, Image} from 'react-native-elements';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;

function ProductList({route, navigation}) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const cat_id = route.params.cat_id;

  useEffect(() => {
    fetch('http://foodcartdelivery.000webhostapp.com/phpFiles/product.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({cat_id: cat_id}),
    })
      .then(res => res.json())
      .then(json => {
        if (json.success === 1) {
          const products = json.Products;
          setProduct(JSON.parse(products));
        } else {
          Alert.alert(json.message);
          navigation.goBack();
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [cat_id, navigation, product]);

  return (
    <SafeAreaView>
      <ScrollView>
        {loading ? (
          <ActivityIndicator />
        ) : (
          product.map((data, i) => (
            <ListItem
              key={i}
              title={data.product_names}
              subtitle={
                <>
                  <Image
                    style={styles.catImage}
                    source={{uri: data.product_images}}
                  />
                  <Text style={styles.proPrice}>{data.product_price}</Text>
                </>
              }
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default ProductList;

const styles = StyleSheet.create({
  catImage: {
    width: W / 3.42,
    height: H / 6,
    resizeMode: 'cover',
  },
  proPrice: {
    //fontWeight: 'bold',
    fontSize: W / 28,
    marginTop: H / 150,
  },
  proName: {
    fontWeight: 'bold',
    fontSize: W / 18,
    color: '#27ae60',
  },
});
