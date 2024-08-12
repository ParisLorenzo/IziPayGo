import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState, useEffect } from 'react';

// Importar imágenes
import { images } from "../constants";
import { icons } from "../constants";

// Botón
import { CustomButton, Loader } from "../components";
import CameraButton from '../components/CameraButton';

const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Image
          tintColor="white"
          source={icons.back}
          resizeMode="contain"
          className="w-6 h-6 mb-2"
        />
      </TouchableOpacity>
      <Image
        source={images.logo2}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const Scan = () => {
  const {facing, setFacing} = useState<CameraType>('back');
  const [scannedData, setScannedData] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Hook para manejar el permiso de la cámara
  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  // Hook para manejar la data escaneada
  useEffect(() => {
    if (scannedData) {
      fetchData(scannedData);
    }
  }, [scannedData]);

  const fetchData = async (qrCode) => {
    try {
      setLoading(true);
      const response = await fetch(`https://patient-dodo-28.hasura.app/api/rest/Tienda/qr/${qrCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': 'UL5257FYCyxdCEYRrRhw9lFFo9k4XvUqJ4afmRcEn4baJ4fbaaGr0v6JFmYYSXRW', // Añade tu admin secret aquí
        },
      });      const data = await response.json();
      console.log(data);
      if (data) {
        router.push({
          pathname: 'tienda/[item]',
          params: {
            item: JSON.stringify({
              descripcion: data.Tienda[0].descripcion,
              direccion: data.Tienda[0].direccion,
              foto: data.Tienda[0].foto,
              id: data.Tienda[0].id,
              nombre: data.Tienda[0].nombre,
              qrCode: data.Tienda[0].qrCode,
            }),
          },
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesitamos permisos para usar la cámara</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <Header />
      <View
        className="w-full flex h-full px-4"
        style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View className="mx-5 mb-20">
          <Text style={styles.welcomeText}>Escanea el código de la tienda</Text>
          <Text style={styles.subText}>Estás a punto de experimentar la primera aplicación de compras sin colas del mundo. Sin colas, sin esperas y sin pasar por caja.</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CameraView
            className="mb-20"
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
};

export default Scan;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 7,
    paddingBottom: 70,
  },
  backButton: {
    marginTop: 10,
    marginRight: 10,
  },
  header: {
    backgroundColor: '#FF4240',
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 40,
  },
  welcomeText: {
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  headerText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'left',
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
    height: 300,
    width: 300,
  },
  scannedText: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});
