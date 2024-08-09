import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import BannerHeader from '../../components/BannerHeader'
import Banner from '../../components/Banner'

const Catalog = () => {
  return (
    <ScrollView  className="bg-primary" style={styles.container}>
      <BannerHeader/>
      <Banner/>
      {/* <Header /> */}
      {/* <Banner /> */}
      {/* <ProductList /> */}
      {/* <Promotion /> */}
    </ScrollView>
  )
}

export default Catalog

const styles = StyleSheet.create({})