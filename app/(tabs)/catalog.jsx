import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import BannerHeader from '../../components/BannerHeader'

const Catalog = () => {
  return (
    <ScrollView style={styles.container}>
      <BannerHeader/>
      {/* <Header /> */}
      {/* <Banner /> */}
      {/* <ProductList /> */}
      {/* <Promotion /> */}
    </ScrollView>
  )
}

export default Catalog

const styles = StyleSheet.create({})