import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { images } from "../constants";

export default function BannerHeader() {
  return (
    <View style={styles.header}>
      <Image source={images.tambo} style={styles.logo} />
      <Text style={styles.title}>Tambo - Toulon</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    width: '90%',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});
