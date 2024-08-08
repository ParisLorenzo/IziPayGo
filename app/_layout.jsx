import { StyleSheet, Text, View } from 'react-native'
import { Redirect, Stack } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import React from 'react'


const RootLayout = () => { 
    return (
        <Stack>
        <Stack.Screen name="index"
        options={{headerShown:
            false}} />
            </Stack>
    ); 
} 

export default RootLayout
