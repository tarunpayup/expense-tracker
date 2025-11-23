import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { useColorScheme } from "react-native";

export default function RootLayout(){
  const colorScheme = useColorScheme();
  return(
    <ThemeProvider value={colorScheme==="dark" ? DarkTheme:DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{title:"Expenses"}}/>
        <Stack.Screen name="add" options={{title:"Add Expenses"}}/>
      </Stack>
      <StatusBar style="auto"/>
    </ThemeProvider>
  );
}