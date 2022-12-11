import { StyleSheet, View } from "react-native";
import MyAppText from "./MyAppText";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

export default function Item({ note }) {
  const color = "aquamarine";
  const size = 42;
  let emoji;
  switch (note.mood) {
    case 0:
      emoji = <FontAwesome5 name="sad-cry" size={size} color={color} />;
      break
    case 1:
      emoji = <Entypo name="emoji-sad" size={size} color={color} />;
      break
    case 2:
      emoji = <Entypo name="emoji-neutral" size={size} color={color} />;
      break
    case 3:
      emoji = <Entypo name="emoji-happy" size={size} color={color} />;
      break
    default:
      emoji = <FontAwesome5 name="laugh-beam" size={size} color={color} />;
      break
  }
  return (
    <>
      <View style={styles.card}>
        {emoji}
        <MyAppText>{note.hours} hours</MyAppText>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <MyAppText marginBottom={0}>Dream name: {note.dreamName}</MyAppText>
        <MyAppText marginTop={0}>Details: {note.dreamDetail}</MyAppText>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "darkcyan",
    margin: 10,
    borderRadius: 10,
  },
});
