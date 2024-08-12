import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { images } from "../../constants";

export default function ScanAdmin() {
  return (
    <View style={styles.container}>
      {/* Header con botón de retroceso y título */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Verificar pago</Text>
      </View>

      {/* Instrucciones */}
      <Text style={styles.instructions}>
        Escanee el código del ticket para verificar{"\n"}
        la compra y los productos
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

      {/* Botón de Guardar */}
      <TouchableOpacity style={styles.saveButton}>
        <FontAwesome name="check" size={24} color="#fff" />
        <Text style={styles.saveButtonText}>Verificado</Text>
      </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#64D0C7',
    textAlign: 'center',
    flex: 1,
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#64D0C7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
