import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { images } from "../constants";

export default function Banner() {
  return (
    <View style={styles.bannerContainer}>
      <Image 
        source={images.banner}
        style={styles.bannerImage} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 100,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});
