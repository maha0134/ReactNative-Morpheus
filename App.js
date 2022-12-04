import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./navigation/AppNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ImageBackground
          source={require("./assets/background.jpg")}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <View style={styles.overlay}>
            <AppNavigation />
          </View>
        </ImageBackground>
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor="pink" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "hsla(0,0%,0%,0.4)",
  },
});
