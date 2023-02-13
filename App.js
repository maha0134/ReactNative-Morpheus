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
    MerriweatherBold: require("./assets/fonts/Merriweather-Bold.ttf"),
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
          <Background />
          {/* </NavigationContainer> */}
          <StatusBar style="light" />
        </SafeAreaProvider>
      </DataProvider>
    );
  }
}
