import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PurchaseSummary from '../../components/PurchaseSummary'

const Boleta = () => {
  return (
    <View style={styles.container}>
      <PurchaseSummary />
    </View>
  )
}

export default Boleta

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    },
  });