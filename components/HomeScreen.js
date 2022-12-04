import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Good Morning!</Text>
      <Text>Good Morning!</Text>
      <Text>Good Morning!</Text>
      <Text>Good Morning!</Text>
      <Text>Good Morning!</Text>
      <Text>Good Morning!</Text>
      <Text>Good Morning!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
  },
});
