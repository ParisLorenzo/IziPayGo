import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AddToCartButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Agregar al carrito</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f28b82',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
