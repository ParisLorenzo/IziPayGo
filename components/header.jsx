// Ruta: src/components/Header.js

import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, images } from '../constants'; 

const Header = () => {
  const router = useRouter();

  return (
    
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Image
          tintColor="white"
          source={icons.back}
          resizeMode="contain"
          style={styles.icon}
        />
      </TouchableOpacity>
      <Image
        source={images.logo2}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF4240',
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginTop: 0,
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 130,
    height: 40,
  },
});

export default Header;
