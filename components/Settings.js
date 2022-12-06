import { SafeAreaView } from "react-native-safe-area-context";
import MyAppHeadingText from "./MyAppHeadingText";
import MyAppText from "./MyAppText";
import { StyleSheet, TextInput, View, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AwesomeButton from "react-native-really-awesome-button";

export default function Settings() {
  const [displayName, setDisplayName] = useState("Sleepyhead");
  const [editName, setEditName] = useState(false);
  const [disabled, setDisabled] = useState(false);

  //TODO Things needed in context: Display Name, Image uri

  useEffect(() => {
    displayName.trim().length > 0 ? setDisabled(false) : setDisabled(true);
  }, [displayName]);

  const handleSubmit = () => {
    setDisplayName(displayName.trim());
    setEditName(false);
  };

  const chooseFromGallery = async ()=>{
    
  }

  const takePhoto = ()=>{

  }

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeadingText>Tune up</MyAppHeadingText>
      <MyAppText>Display Name</MyAppText>
      {!editName && (
        <View style={[styles.row, styles.glass]}>
          <MyAppText>{displayName ?? "Sleepyhead"}</MyAppText>
          <Pressable onPress={() => setEditName(true)}>
            <AntDesign name="edit" size={25} color="turquoise" />
          </Pressable>
        </View>
      )}
      {editName && (
        <View style={styles.row}>
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
            onPress={handleSubmit}
          />
        </View>
      )}
      <MyAppText>Change background</MyAppText>
      <View style={styles.buttons}>
        <AwesomeButton
          backgroundColor="teal"
          raiseLevel={2}
          backgroundDarker="lightgray"
          borderRadius={15}
          paddingHorizontal={10}
          height={70}
          style={styles.btn}
          onPress={chooseFromGallery}
        >
          <MyAppText>Choose from gallery</MyAppText>
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="teal"
          raiseLevel={2}
          backgroundDarker="lightgray"
          borderRadius={15}
          paddingHorizontal={10}
          height={70}
          style={styles.btn}
          onPress = {takePhoto}
        >
          <MyAppText>Take a new picture</MyAppText>
        </AwesomeButton>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  glass: {
    backgroundColor: "#00ced13F",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    margin: 10,
  },
});
