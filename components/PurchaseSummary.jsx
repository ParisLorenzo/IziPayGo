import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import OrderItem from './OrderItem';

export default function PurchaseSummary() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Por favor, presente su boleta al salir</Text>
      
      <QRCode
        value="https://example.com/recibo" // Cambia esto por el valor real
        size={150}
      />
      
      <Text style={styles.header}>Resumen de la compra</Text>
      
      <OrderItem 
        imageUri="link-a-la-imagen" 
        productName="Inka Chips Jalapeño 135gr" 
        price="s/. 8.00" 
      />
      
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total pagado</Text>
        <Text style={styles.totalPrice}>s/. 8.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
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
