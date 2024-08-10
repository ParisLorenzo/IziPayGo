import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import CustomButton from '../../components/CustomButton';

const Scan = () => {
  const router = useRouter();
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
            <Image
              source={images.qr}
              className="w-[300px] h-[300px]"
              resizeMode="contain"
              />
            </View>

            <TouchableOpacity style={styles.button}>
        <CustomButton
            title="Comenzar a comprar"
            handlePress={() => router.push("/catalog")}
            //containerStyles="w-full mt-7"
          />
        </TouchableOpacity>
        </View>
      
    </SafeAreaView>);
}

export default Scan

const styles = StyleSheet.create({})