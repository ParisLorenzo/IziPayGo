import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { images } from "../constants";
import CustomButton from './CustomButton';

export default function Product({ image, name, price, oldPrice }) {
  return (
    <View style={styles.productContainer}>
      <Image source={images.product} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>S/ {price}</Text>
      {oldPrice && <Text style={styles.productOldPrice}>S/ {oldPrice}</Text>}
      <TouchableOpacity style={styles.button}>
      <CustomButton 
            title="Ver producto"
            containerStyles="min-h-[30px]"
            handlePress={() => router.push("/scanTienda")}
            size="true"
            //containerStyles="w-full mt-7"
        />  
       </TouchableOpacity>  
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
  button: {
    marginTop: 10,
    alignSelf: 'center', // Centrar el botón horizontalmente
    width: "70%"
  },
});
