import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { icons } from '../constants';

const CameraButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.cameraButtonContainer}
      onPress={onPress}
    >
      <View style={styles.cameraButton}>
        <Image
          source={icons.camera}
          style={styles.cameraIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cameraButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -30, // Eleva el botón sobre la barra de navegación
  },
  cameraButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#2AD2C9', // Color de fondo del botón
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  cameraIcon: {
    width: 28,
    height: 28,
    tintColor: '#FFF', // Color del ícono
  },
});

export default CameraButton;
