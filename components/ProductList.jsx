import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Product from './Product';

export default function ProductList() {
  const products = [
    // Ejemplo de productos
    { id: 1, image: 'link-a-la-imagen', name: 'Producto 1', price: '92.90', oldPrice: '99.80' },
    { id: 2, image: 'link-a-la-imagen', name: 'Producto 2', price: '13.90', oldPrice: '17.80' },
    { id: 3, image: 'link-a-la-imagen', name: 'Producto 2', price: '13.90', oldPrice: '17.80' },
    { id: 4, image: 'link-a-la-imagen', name: 'Producto 2', price: '13.90', oldPrice: '17.80' },

    // Agrega más productos aquí
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Productos Destacados</Text>
      <ScrollView horizontal style={styles.productList}>
        {products.map(product => (
          <Product 
            key={product.id} 
            image={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
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
