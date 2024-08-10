import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { icons } from "../../constants";
import CameraButton from '../../components/CameraButton';

const TabsIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6 mb-2"
      />
      <Text 
        className={`$(focused ? 'font-psemibold' : 'font-regular) text-xs`}
        style={{color: color}}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const router = useRouter();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#2AD2C9',
          tabBarInactiveTintColor: '#929FAD',
          tabBarStyle:{
            backgroundColor: '#ffff',
            borderTopWidth: 0,
            height: 90,
            paddingTop: 10
          }
        }}
      >
        <Tabs.Screen 
          name="catalog"
          options={{
            title: "Catálogo",
            headerShown: false,
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
            headerShown: false,
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
            headerShown: false,
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
          name="productoSelect"
          options={{
            headerShown: false,
            tabBarButton: () => null, // Esto ocultará el tab en la barra de navegación inferior
            tabBarVisible: false, // Opcional: puedes usar esta línea si el tab aún se muestra.
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;