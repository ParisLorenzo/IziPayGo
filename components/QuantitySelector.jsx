import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="-" onPress={decreaseQuantity} />
      <Text style={styles.quantityText}>{quantity}</Text>
      <Button title="+" onPress={increaseQuantity} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});
