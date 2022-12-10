import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Background from "./components/Background";
import { DataProvider } from "./context/dataContext";

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
