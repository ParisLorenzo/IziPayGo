import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { images } from "../../constants";

// Asegúrate de importar tu imagen desde los assets o una URL

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={images.tambo} style={styles.logo} />
      <Text style={styles.storeName}>Tambo - Toulon</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RecomendacionesIA')}>
        <Text style={styles.buttonText}>Recomendaciones con IA</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AnalisisCaja')}>
        <Text style={styles.buttonText}>Análisis de caja</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#64d8cb',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
  },
});
