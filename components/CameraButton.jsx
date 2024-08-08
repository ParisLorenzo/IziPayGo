import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CameraButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={require('../assets/icons/camera.png')} 
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1FC8DB', // Color del botón
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Añadir sombra para Android
    shadowColor: '#000', // Añadir sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    marginTop: 20, // Ajustar espacio superior
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFF', // Cambia el color del ícono si es necesario
  },
});

export default CameraButton;
