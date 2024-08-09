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
    width: "100%"
  },
});

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-primary h-full">
      <Header/>
      <View
          className="w-full flex h-full px-4"
          style={{
            justifyContent: 'space-around'
          }}
        >
        <View 
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View className="mx-5">
            <Text style={styles.welcomeText}>Tienda Tambo - Larco</Text>
            <Text style={styles.subText}>VXHC+CC9, Av. José Larco, Miraflores 15074</Text>
          </View>
          <View 
            style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
            >
            <Image
              source={images.tiendaportada}
              className="w-[400px] h-[300px]"
              resizeMode="contain"
              />
          </View>
          <View className="mx-5">
            <Text style={styles.subText}>
            Tambo es una cadena de practi-tiendas que es parte de Lindcorp, un grupo empresarial peruano dedicado y comprometido con el desarrollo del Perú.
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
        <CustomButton
            title="Comenzar a comprar"
            handlePress={() => router.push("/catalog")}
            //containerStyles="w-full mt-7"
          />
        </TouchableOpacity>
        </View>
        </View>
      
    </SafeAreaView>
  );
}
