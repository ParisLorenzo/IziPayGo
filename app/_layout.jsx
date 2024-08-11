import { StyleSheet, Text, View } from 'react-native'
import { Redirect, Stack } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import React from 'react'


const RootLayout = () => { 
    return (
        <Stack>
        <Stack.Screen 
            name="index"
            options={{headerShown:
            false}} 
        />
        <Stack.Screen 
            name="onBoard"
            options={{headerShown:
            false}} 
        />
        <Stack.Screen 
            name="scanTienda"
            options={{headerShown:
            false}} 
        />
        <Stack.Screen 
            name="tienda"
            options={{headerShown:
            false}} 
        />
                <Stack.Screen 
            name="(tabs)"
            options={{headerShown:
            false}} 
        />
        </Stack>
    ); 
} 

export default RootLayout
