import { ImageBackground, View, StyleSheet } from "react-native";
import AppNavigation from "../navigation/AppNavigation";
import { useData } from "../context/dataContext";
export default function Background() {
  const [background, setBackground] = useData();
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={{ flex: 1, width: "100%" }}
    >
      <View style={styles.overlay}>
        <AppNavigation />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "hsla(0,0%,0%,0.8)",
  },
});
