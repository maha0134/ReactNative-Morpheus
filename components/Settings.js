import { SafeAreaView } from "react-native-safe-area-context";
import MyAppHeadingText from "./MyAppHeadingText";
import MyAppText from "./MyAppText";
import { StyleSheet, TextInput, View, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Settings() {
  const [displayName, setDisplayName] = useState("Sleepyhead");
  const [editName, setEditName] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    displayName.length > 0 ? setDisabled(false) : setDisabled(true);
    if (displayName.length < 1) setDisabled(true);
  }, [displayName]);

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeadingText>Tune up</MyAppHeadingText>
      <MyAppText>Display Name</MyAppText>
      <View style={styles.row}>
        {!editName && (
          <>
            <MyAppText>{displayName ?? "Sleepyhead"}</MyAppText>
            <Pressable onPress={() => setEditName(true)}>
              <AntDesign name="edit" size={25} color="turquoise" />
            </Pressable>
          </>
        )}
        {editName && (
          <>
            <TextInput
              placeholder="Queen..."
              style={styles.textBox}
              value={displayName}
              onChangeText={setDisplayName}
            />
            <Button
              title="Set"
              color={disabled ? "silver" : "turquoise"}
              disabled={disabled}
              onPress={() => setEditName(false)}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(200,0,0,0)",
    flex: 1,
    margin: 16,
  },
  textBox: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    flex: 0.9,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
