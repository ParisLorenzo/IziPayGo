import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import BannerHeader from '../../components/BannerHeader'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

const Catalog = () => {
  return (
    
    <ScrollView  className="bg-primary" style={styles.container}>
      <BannerHeader/>
      <Banner/>
      <ProductList/>
      <ProductList/>
    </ScrollView>
  )
}

export default Catalog

const styles = StyleSheet.create({})