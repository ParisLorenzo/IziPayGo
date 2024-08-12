import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import ProductDetail from '../../../components/ProductDetail';

const ProductoSelect = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useLocalSearchParams(); // Obtener los parámetros pasados en la URL

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://patient-dodo-28.hasura.app/api/rest/Producto/${params.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': 'UL5257FYCyxdCEYRrRhw9lFFo9k4XvUqJ4afmRcEn4baJ4fbaaGr0v6JFmYYSXRW', // Reemplaza con tu clave secreta
          },
        });
        const data = await response.json();
        setProductDetails(data.Producto_by_pk);
        console.log(data) // Asume que data.Producto es un array y queremos el primer elemento
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProductDetails();
    }
  }, [params.id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (!productDetails) {
    return (
      <View style={styles.container}>
        <Text>No se encontraron detalles del producto.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductDetail details={productDetails} />
    </View>
  );
};

export default ProductoSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
});
