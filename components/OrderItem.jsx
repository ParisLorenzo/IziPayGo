import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Para el ícono de eliminar
import { images } from "../constants";

export default function OrderItem({ imageUri, productName, price }) {
  return (
    <View style={styles.container}>
      <Image 
        source={images.product}
        style={styles.image} 
      />
      <View style={styles.details}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="trash-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
});
