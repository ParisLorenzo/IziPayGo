import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { images } from "../../constants";

export default function QrScreen() {
  return (
    <View style={styles.container}>
      {/* Instrucciones */}
      <Text style={styles.instructions}>
        Muestre o imprima el siguiente código QR,{"\n"}
        para que el cliente pueda hacer uso de{"\n"}
        IziGO en su tienda
      </Text>

      {/* Logo y Nombre de la tienda */}
      <Image source={images.tambo} style={styles.logo} />
      <Text style={styles.storeName}>Tambo - Toulon</Text>

      {/* Código QR */}
      <View style={styles.qrContainer}>
        <QRCode
          value="https://www.example.com" // El valor que el QR representará
          size={200}
        />
      </View>

      {/* Botones de Guardar e Imprimir */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="download" size={24} color="#fff" />
          <Text style={styles.actionText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.printButton]}>
          <FontAwesome name="print" size={24} color="#fff" />
          <Text style={styles.actionText}>Imprimir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrContainer: {
    marginBottom: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#64D0C7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  printButton: {
    backgroundColor: '#8E8E93',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
