import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../constants';

const Step = ({ stepNumber, title, description }) => {
  return (
    <View style={styles.stepContainer}>
      <Image
        source={images.check} 
        style={styles.check}
      />
      <View style={styles.textContainer}>
        <Text style={styles.stepTitle}>Paso {stepNumber}</Text>
        <Text style={styles.stepDescription}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FEEEEE',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  check: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  stepDescription: {
    fontSize: 14,
    color: '#000',
    marginTop: 4,
  },
});

export default Step;
