import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from "../../constants";
import CameraButton from '../../components/CameraButton';
import Header from '../../components/header';


const TabsIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{ width: 24, height: 24, marginBottom: 2 }}
      />
      <Text 
        style={{ color: color, fontSize: 12, fontWeight: focused ? '600' : '400' }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#2AD2C9',
          tabBarInactiveTintColor: '#929FAD',
          tabBarStyle:{
            backgroundColor: '#ffff',
            borderTopWidth: 0,
            height: 70,
            paddingTop: 30
          },
          header: () => <Header />, // Agrega el Header aquí
        }}
      >
        <Tabs.Screen 
          name="catalog"
          options={{
            title: "Catálogo",
            headerShown: true, // Asegúrate de que el header esté visible
            tabBarIcon: ({ color, focused }) =>
              <TabsIcon
                icon={icons.category}
                color={color}
                name={"Catálogo"}
                focused={focused}
              />,
          }}
        />
        <Tabs.Screen 
          name="scan"
          options={{
            title: "Escanear",
            headerShown: true,
            tabBarButton: (props) => (
                 <CameraButton
                  onPress={() => router.push("/scan")}
                 />
            ),
          }}
        />
        <Tabs.Screen 
          name="cart"
          options={{
            title: "Carrito",
            headerShown: true,
            tabBarIcon: ({ color, focused }) =>
              <TabsIcon
                icon={icons.cart}
                color={color}
                name={"Carrito"}
                focused={focused}
              />,
          }}
        />
        <Tabs.Screen 
          name="productoSelect/[id]"
          options={{
            headerShown: true,
            tabBarButton: () => null, // Esto ocultará el tab en la barra de navegación inferior
            tabBarVisible: false, // Opcional: puedes usar esta línea si el tab aún se muestra.
          }}
        />
        <Tabs.Screen 
          name="boleta"
          options={{
            headerShown: true,
            tabBarButton: () => null, // Esto ocultará el tab en la barra de navegación inferior
            tabBarVisible: false, // Opcional: puedes usar esta línea si el tab aún se muestra.
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Puedes ajustar el color de fondo según necesites
  },
});

export default TabsLayout;
