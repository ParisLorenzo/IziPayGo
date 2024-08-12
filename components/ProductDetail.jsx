import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddtoCartButton';
import { Link, useRouter } from 'expo-router';

export default function ProductDetail({ details }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{details.nombre}</Text>
      <Image 
        source={{ uri: details.foto }}
        style={styles.productImage} 
      />
      <Text style={styles.productPrice}>s/. {parseFloat(details.precio).toFixed(2)}</Text>
      <Text style={styles.productDescription}>{details.descripcion}</Text>
      <QuantitySelector />
      <AddToCartButton text="Añadir al carrito" icon="cart-outline" press={() => router.push("/cart")} />
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
    textAlign: 'center',
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
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});
