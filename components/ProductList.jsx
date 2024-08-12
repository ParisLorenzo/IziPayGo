import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Product from './Product';

export default function ProductList({ title, products }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal style={styles.productList}>
        {products.map(product => (
          <Product 
            key={product.id} 
            id={product.id}
            image={product.foto}  // Cambiar `image` por `foto`
            name={product.nombre} // Cambiar `name` por `nombre`
            price={product.precio} // Cambiar `price` por `precio`
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'left',
  },
  productList: {
    paddingLeft: 10,  // Añadido para alinear los productos con el título
  },
});
