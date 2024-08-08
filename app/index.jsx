import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import Profile from './profile';
import { SafeAreaView } from 'react-native-safe-area-context';

//Importar imagenes 
import { images } from "../constants";

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
  header: {
    backgroundColor: '#FF4240',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 84,
  },
});

export default function App() {
  return (
    <SafeAreaView className="bg-primary">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center items-center px-4">
          {/* Otros contenidos */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


