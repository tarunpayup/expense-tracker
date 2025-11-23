import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from 'react';

export default function RootLayout(){
  return(
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{title:"Expenses"}}/>
        <Stack.Screen name="add" options={{title:"Add Expenses"}}/>
      </Stack>
      <StatusBar style="auto"/>
    </ThemeProvider>
  );
}