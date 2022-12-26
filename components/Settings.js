import { SafeAreaView } from "react-native-safe-area-context";
import MyAppHeadingText from "./MyAppHeadingText";
import MyAppText from "./MyAppText";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AwesomeButton from "react-native-really-awesome-button";
import * as ImagePicker from "expo-image-picker";
import { useData } from "../context/dataContext";

export default function Settings() {
  const [cameraStatus, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const [mediaStatus, requestMediaPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const [editName, setEditName] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [, setBackground, displayName, setDisplayName] = useData();
  const [changeDisplayName, setChangeDisplayName] = useState(displayName);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    displayName.trim().length > 0 ? setDisabled(false) : setDisabled(true);
  }, [displayName]);

  const handleSubmit = () => {
    setDisplayName(changeDisplayName.trim());
    setEditName(false);
  };

  const chooseFromGallery = async () => {
    await requestMediaPermission();
    if (mediaStatus === "denied") {
      Alert.alert("Error", "Please grant permissions to read from gallery");
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setIsLoading(true);
        setTimeout(() => {
          setBackground({ uri: result.assets[0].uri });
          setIsLoading(false);
        }, 1000);
      } else {
        Alert.alert("Error", "Oops! You did not select any image");
      }
    }
  };

  const takePhoto = async () => {
    await requestCameraPermission();
    if (cameraStatus === "denied") {
      Alert.alert("Error", "Please allow permission to use the camera");
    } else {
      let options = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        exif: false,
      };
      let result = await ImagePicker.launchCameraAsync(options).catch(
        console.error
      );
      if (!result.canceled) {
        setIsLoading(true);
        setTimeout(() => {
          let uri = result.assets[0].uri;
          setBackground({ uri: uri });
          setIsLoading(false);
        }, 1000);
      } else {
        Alert.alert("Error", "Oops! You did not click a picture");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeadingText paddingTop={0}>Tune up</MyAppHeadingText>
      <MyAppText>Display Name</MyAppText>
      {!editName && (
        <View style={[styles.row, styles.glass]}>
          <MyAppText>{displayName}</MyAppText>
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
            value={changeDisplayName}
            onChangeText={setChangeDisplayName}
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
          raiseLevel={1}
          backgroundDarker="lightgray"
          borderRadius={10}
          paddingHorizontal={15}
          width={205}
          height={65}
          style={styles.btn}
          onPress={chooseFromGallery}
        >
          <MyAppText size={16}>Choose from gallery</MyAppText>
        </AwesomeButton>
        <AwesomeButton
          backgroundColor="teal"
          raiseLevel={1}
          backgroundDarker="lightgray"
          borderRadius={10}
          paddingHorizontal={15}
          width={205}
          height={65}
          style={styles.btn}
          onPress={takePhoto}
        >
          <MyAppText size={16}>Take a new picture</MyAppText>
        </AwesomeButton>
      </View>
      {isLoading && <ActivityIndicator size="large" color="turquoise" />}
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
    paddingLeft: 20,
    paddingRight: 25,
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
