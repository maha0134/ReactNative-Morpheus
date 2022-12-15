import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Background from "./components/Background";
import { DataProvider } from "./context/dataContext";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Merriweather: require("./assets/fonts/Merriweather-Regular.ttf"),
    MerriweatherLight: require("./assets/fonts/Merriweather-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().then(() => setAppIsReady(true));
    }
  }, [fontsLoaded]);
  if (appIsReady) {
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
}
