import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState, useEffect } from 'react';

const Scan = () => {
  const {facing, setFacing} = useState<CameraType>('back');
  const [scannedData, setScannedData] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);


  useEffect(() => {
    if (scannedData) {
      fetchData(scannedData);
    }
  }, [scannedData]);

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const fetchData = async (qrCode) => {
    try {
      setLoading(true);
      const response = await fetch(`https://patient-dodo-28.hasura.app/api/rest/Producto/Barcode/${qrCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': 'UL5257FYCyxdCEYRrRhw9lFFo9k4XvUqJ4afmRcEn4baJ4fbaaGr0v6JFmYYSXRW', // Añade tu admin secret aquí
        },
      });      const data = await response.json();
      console.log(data);
      if (data) {
        router.push({
          pathname: 'productoSelect/[id]',
          params: {
            id: data.Producto[0].id
          },
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <View
        className="w-full flex h-full px-4"
        style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}
      >
        <View className="mx-5 mb-20">
          <Text style={styles.welcomeText}>Escanea el código de barras del producto</Text>
          <Text style={styles.subText}>Acerca el producto para poder agregar el producto a tu carrito virtual y comprar más rápido</Text>
        </View>
        <View 
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CameraView 
            style={styles.camera} 
            facing={facing}
            onBarcodeScanned={(data) => setScannedData(data.data)} // Guarda la data escaneada en el estado
          />
          {loading && <Text style={styles.loadingText}>Cargando...</Text>}
          {scannedData && !loading && (
            <Text style={styles.scannedText}>Código escaneado: {scannedData}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Scan

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    height: 200,
    width: 350,
  },
  scannedText: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
