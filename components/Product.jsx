import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { images } from "../constants";

export default function Product({ image, name, price, oldPrice }) {
  return (
    <View style={styles.productContainer}>
      <Image source={images.product} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>S/ {price}</Text>
      {oldPrice && <Text style={styles.productOldPrice}>S/ {oldPrice}</Text>}
      <Button title="Ver producto" />
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    width: 150,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'green',
  },
  productOldPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
});
