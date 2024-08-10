import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderSummary from '../../components/OrderSummary'

const Cart = () => {
  return (
    <View style={styles.container}>
      <OrderSummary />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});