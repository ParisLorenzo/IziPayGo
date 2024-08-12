import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importa los íconos
import { images } from "../../constants";

export default function HomeAdmin() {
  return (
    <View style={styles.container}>
      {/* Header con logo y botón QR */}
      <View style={styles.header}>
        <Image source={images.tambo} style={styles.logo} />
        <TouchableOpacity style={styles.qrButton}>
          <FontAwesome name="qrcode" size={20} color="#fff" style={styles.qrIcon} />
          <Text style={styles.qrText}>IzipayGo QR</Text>
        </TouchableOpacity>
      </View>

      {/* Nombre de la tienda */}
      <Text style={styles.storeName}>Tambo - Larco</Text>

      {/* Balance de tienda */}
      <TouchableOpacity style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance de tienda</Text>
        <Text style={styles.balanceAmount}>S/ 1,145.00</Text>
      </TouchableOpacity>

      {/* Botones de opciones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="gift" size={24} color="#fff" />
          <Text style={styles.optionText}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="dollar" size={24} color="#fff" />
          <Text style={styles.optionText}>Ventas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="tags" size={24} color="#fff" />
          <Text style={styles.optionText}>Promociones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="users" size={24} color="#fff" />
          <Text style={styles.optionText}>Clientes</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 40,
  },
  qrButton: {
    flexDirection: 'row', // Para alinear el icono y el texto en la misma fila
    backgroundColor: '#64D0C7',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  qrIcon: {
    marginRight: 5, // Espacio entre el icono y el texto
  },
  qrText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  storeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  balanceContainer: {
    width: '100%',
    backgroundColor: '#E8F5F3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceLabel: {
    color: '#64D0C7',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#64D0C7',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#64D0C7',
    padding: 20,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10, // Añadido para que el texto no se superponga con el icono
  },
});
