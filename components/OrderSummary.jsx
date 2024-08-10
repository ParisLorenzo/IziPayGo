import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OrderItem from './OrderItem';
import AddToCartButton from './AddtoCartButton';

export default function OrderSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumen del pedido</Text>
      <OrderItem 
        imageUri="link-a-la-imagen" 
        productName="Inka Chips Jalapeño 135gr" 
        price="s/. 8.00" 
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>s/. 8.00</Text>
      </View>
      <AddToCartButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
