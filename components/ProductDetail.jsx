import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddtoCartButton';
import { images } from "../constants";

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>Inka Chips Jalapeño 135gr</Text>
      <Image 
        source={images.product}
        style={styles.productImage} 
      />
      <Text style={styles.productPrice}>s/. 8.00</Text>
      <QuantitySelector />
      <AddToCartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
