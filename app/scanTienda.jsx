import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link, useRouter } from 'expo-router';
import Profile from '.';
import {Tabs, Redirect} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

//Importar imagenes 
import { images } from "../constants";
import { icons } from "../constants";

//boton
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

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 7,
    paddingBottom: 70, // Añadir relleno para el final de la vista de desplazamiento
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
    fontSize: 19.2,
    textAlign: 'center',
    marginVertical: 5,
    color: '#000', 
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000', 
  },
  headerText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'left',
  },
  button: {
    
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center', // Centrar el botón horizontalmente
  },
});

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-primary">
      <Header />

      <View style={styles.button}>
        <CameraButton
            onPress={() => router.push("/tienda")}
            //containerStyles="w-full mt-7"
          />
        </View>
      
    </SafeAreaView>
  );
}
