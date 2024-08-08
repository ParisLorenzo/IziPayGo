import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { icons } from "../../constants";


const TabsIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        resizeMode="contain"
        source={icon}
        tintColor={color}
        className="w-6 h-6"
      />
      <Text 
        className={`$(focused ? 'font-psemibold' : 'font-regular) text-xs`}
        style={{color: color}}
      >
        {name}
      </Text>
    </View>
  );
}

const TabsLayout = () => {
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
            tabBarIcon: ({color, focused}) =>
            ( 
              <TabsIcon
                icon={icons.category}
                color={color}
                name="Catálogo"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="scan"
          options={{
            title: "Escanear",
            headerShown: false,
            tabBarIcon: ({color, focused}) =>
            ( 
              <TabsIcon
                icon={icons.home}
                color={color}
                name="Escanear"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="cart"
          options={{
            title: "Carrito",
            headerShown: false,
            tabBarIcon: ({color, focused}) =>
            ( 
              <TabsIcon
                icon={icons.cart}
                color={color}
                name="Carrito"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})