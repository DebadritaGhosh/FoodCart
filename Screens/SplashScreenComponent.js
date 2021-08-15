import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, ImageBackground, View} from 'react-native';

let W = Dimensions.get('window').width;
let H = Dimensions.get('window').height;
function SplashScreenComponent({navigation}) {
  const [check, checkIn] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      checkIn(false);
    }, 250);
  });
  if (check) {
    return (
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../assets/splash_screen.png')}
          style={styles.styleImage}
        />
      </View>
    );
  } else {
    return <>{navigation.navigate('First')}</>;
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  styleImage: {
    width: W,
    height: H,
    resizeMode: 'cover',
  },
  butt: {
    marginBottom: 50,
  },
});
export default SplashScreenComponent;
