import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScanTienda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escanear Tienda</Text>
      {/* Aquí puedes agregar la funcionalidad de escaneo */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScanTienda;
  