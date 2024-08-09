import React from 'react'
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

//Importar imagenes 
import { images } from "../constants";
import { CustomButton } from "../components";

export default function App() {

  const router = useRouter();

  return (
    <SafeAreaView className="bg-secondary-default h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 200,
          }}
        >
          <View 
            style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              source={images.logo2}
              resizeMode="contain"
              className="w-[150px] h-[70px]"
            />

            <Text className="text-xl font-semibold text-white mt-5 font-psemibold">
              Ingresa ahora
            </Text>
          </View>


          <CustomButton
            title="Ingresar como invitado"
            handlePress={() => router.push("/onBoard")}
            containerStyles="mt-7"
            isLoading={false}
          />

          <CustomButton
            title="Ingresar con cuenta"
            handlePress={() => router.push("/onBoard")}
            containerStyles="mt-7"
            isLoading={false}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
