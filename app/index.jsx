import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link, useRouter } from 'expo-router';
import Profile from './profile';
import { SafeAreaView } from 'react-native-safe-area-context';
import Step from './step';

//Importar imagenes 
import { images } from "../constants";

//boton
import { CustomButton, Loader } from "../components";

const Header = () => {
  return (
    <View style={styles.header}>
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
});

export default function App() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-primary">
      <Header />
      <ScrollView  contentContainerStyle={styles.scrollContainer}>
        <View className="flex-1 justify-center items-center px-4">
            <Text style={styles.welcomeText}>Bienvenido al futuro de las compras</Text>
            <Text style={styles.subText}>Nos alegramos mucho de que estés aquí!</Text>
         {
            <Image
              source={images.portada}
              style={styles.portada}
              className="max-w-[380px] w-[400px] h-[200px]"
              resizeMode="contain"
              />
         }
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Como utilizar la aplicación:</Text>
        <Step
          stepNumber={1}
          title="Escanee el código de la tienda."
          description="Al escanear el código de la tienda se podrá identificar en qué tienda está."
        />
        <Step
          stepNumber={2}
          title="Coja sus artículos y escanee su código."
          description="Para añadir el artículo a comprar es necesario escanear su código QR."
        />
        <Step
          stepNumber={3}
          title="Olvidese de las colas."
          description="Pague desde la aplicación y muestre su boleta electrónica al salir."
        />
        <TouchableOpacity style={styles.button}>
        <CustomButton
            title="Escanear QR de la tienda"
            handlePress={() => router.push("/scanTienda")}
            //containerStyles="w-full mt-7"
          />
        </TouchableOpacity>
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}



