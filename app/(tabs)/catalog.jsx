import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import BannerHeader from '../../components/BannerHeader';
import Banner from '../../components/Banner';
import ProductList from '../../components/ProductList';

const Catalog = () => {
  const [typeOneProducts, setTypeOneProducts] = useState([]);
  const [typeTwoProducts, setTypeTwoProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://patient-dodo-28.hasura.app/api/rest/Producto', {
          headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': 'UL5257FYCyxdCEYRrRhw9lFFo9k4XvUqJ4afmRcEn4baJ4fbaaGr0v6JFmYYSXRW', // Asegúrate de reemplazar esto con tu clave secreta
          },
        });
        const data = await response.json();

        const productsTypeOne = data.Producto.filter(product => product.tipo === 'Dulces');
        const productsTypeTwo = data.Producto.filter(product => product.tipo === 'Bebidas');

        setTypeOneProducts(productsTypeOne);
        setTypeTwoProducts(productsTypeTwo);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ScrollView className="bg-primary" style={styles.container}>
      <BannerHeader />
      <Banner />
      <ProductList title="Dulces" products={typeOneProducts} />
      <ProductList title="Bebidas" products={typeTwoProducts} />
    </ScrollView>
  );
};

export default Catalog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
