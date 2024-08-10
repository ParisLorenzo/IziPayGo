import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Importa el ícono

export default function AddToCartButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonContent}>
        <Icon name="cart-outline" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF4240',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
