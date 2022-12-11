import { StyleSheet, View } from "react-native";
import MyAppText from "./MyAppText";

export default function Item({ note }) {
  return (
    <View style={StyleSheet.card}>
      <MyAppText>{note.mood}</MyAppText>
      <MyAppText>{note.hours}</MyAppText>
      <MyAppText>{note.dreamName}</MyAppText>
      <MyAppText>{note.dreamDetail}</MyAppText>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
