import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDetail from '../../components/ProductDetail'

const ProductoSelect = () => {
  return (
    <View style={styles.container}>
      <ProductDetail />
    </View>
  )
}

export default ProductoSelect

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    },
  });