import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Background from "./components/Background";
import { DataProvider } from "./context/dataContext";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <DataProvider>
    <SafeAreaProvider>
      <NavigationContainer>
        <Background />
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
    </DataProvider>
  );
}

