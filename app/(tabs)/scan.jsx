import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const Scan = () => {
  const {facing, setFacing} = useState<CameraType>('back');
  const [scannedData, setScannedData] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View
        className="w-full flex h-full px-4"
        style={{
          justifyContent: 'space-around'
        }}
      >
        <View className="mx-5">
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
            style={styles.camera} 
            facing={facing}
            onBarcodeScanned={(data) => setScannedData(data.data)} // Guarda la data escaneada en el estado
          />
          {scannedData && (
            <Text style={styles.scannedText}>Código escaneado: {scannedData}</Text>
          )}
        </View>
        <TouchableOpacity>
          <CustomButton
            title="Escanear"
            handlePress={() => router.push("/catalog")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Scan

const styles = StyleSheet.create({
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
