import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAppHeadingText from "./MyAppHeadingText";
import MyAppText from "./MyAppText";
import { FontAwesome5, Entypo, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { ScrollView } from "react-native-gesture-handler";
import AwesomeButton from "react-native-really-awesome-button";
import { getDate } from "../helpers/helperFunctions";
import { useData } from "../context/dataContext";

export default function AddDream() {
  const color = "silver";
  const [selectedValue, setSelectedValue] = useState(null);
  const size = 36;
  const selectedSize = 42;
  const selectedColor = "aquamarine";
  const [disabled, setDisabled] = useState(true);
  const [name, handleNameChange] = useState("");
  const [details, handleDetailsChange] = useState("");
  const [sliderValue, setSliderValue] = useState(7);
  const date = getDate();
  const [, , displayName, , data, setData] = useData();
  const [showOverlay, setOverlay] = useState(false);

  useEffect(() => {
    if (
      selectedValue !== null &&
      name.trim().length > 0 &&
      details.trim().length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedValue, name, details]);

  function handleSubmit() {
    const details = {
      id: date,
      mood: selectedValue,
      hours: sliderValue,
      dreamName: name,
      dreamDetail: details,
    };
    let dataCopy;
    if (data) {
      dataCopy = [...data];
    }
    dataCopy.push(details);
    setOverlay(true);
    setTimeout(() => {
      setOverlay(false);
      setData(dataCopy);
    }, 1500);
  }

  return (
    <>
      <ScrollView>
        <MyAppHeadingText heading={1}>
          Good Morning{" "}
          <MyAppHeadingText heading={1} color="turquoise">
            {displayName}
          </MyAppHeadingText>
        </MyAppHeadingText>
        <View style={styles.row}>
          <Ionicons name="today" size={25} color="white" />
          <MyAppText align="center" color="turquoise">
            {date}
          </MyAppText>
        </View>
        <MyAppText>How was your night?</MyAppText>
        <View style={styles.emojis}>
          <Pressable onPress={() => setSelectedValue(0)}>
            <FontAwesome5
              name="sad-cry"
              size={selectedValue === 0 ? selectedSize : size}
              color={selectedValue === 0 ? selectedColor : color}
            />
          </Pressable>
          <Pressable onPress={() => setSelectedValue(1)}>
            <Entypo
              name="emoji-sad"
              size={selectedValue === 1 ? selectedSize : size}
              color={selectedValue === 1 ? selectedColor : color}
            />
          </Pressable>
          <Pressable onPress={() => setSelectedValue(2)}>
            <Entypo
              name="emoji-neutral"
              size={selectedValue === 2 ? selectedSize : size}
              color={selectedValue === 2 ? selectedColor : color}
            />
          </Pressable>
          <Pressable onPress={() => setSelectedValue(3)}>
            <Entypo
              name="emoji-happy"
              size={selectedValue === 3 ? selectedSize : size}
              color={selectedValue === 3 ? selectedColor : color}
            />
          </Pressable>
          <Pressable onPress={() => setSelectedValue(4)}>
            <FontAwesome5
              name="laugh-beam"
              size={selectedValue === 4 ? selectedSize : size}
              color={selectedValue === 4 ? selectedColor : color}
            />
          </Pressable>
        </View>
        <MyAppText>How many hours did you sleep?</MyAppText>
        <View style={styles.glass}>
          <Slider
            style={{ width: "80%", height: 20, alignSelf: "center" }}
            minimumValue={0}
            maximumValue={12}
            step={1}
            value={sliderValue}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#DDDDDD"
            onValueChange={(val) => setSliderValue(val)}
          />
          <MyAppText align="center" marginTop={0}>
            {sliderValue} hours
          </MyAppText>
        </View>
        <MyAppHeadingText heading={2}>Dream Diary</MyAppHeadingText>
        <MyAppText>Dream name</MyAppText>
        <TextInput
          placeholder="Being chased..."
          onChangeText={handleNameChange}
          value={name}
          cursorColor="black"
          style={[styles.textBox, { marginBottom: 0 }]}
        />
        <MyAppText>Dream details</MyAppText>
        <TextInput
          placeholder="I was on a horse..."
          multiline
          numberOfLines={5}
          style={styles.textBox}
          cursorColor="black"
          onChangeText={handleDetailsChange}
          value={details}
        />
        <View style={styles.btn}>
          <AwesomeButton
            progress
            animatedPlaceholder
            backgroundColor={disabled ? "lightgray" : "teal"}
            raiseLevel={disabled ? 0 : 2}
            borderRadius={75}
            backgroundDarker="silver"
            paddingHorizontal={25}
            height={45}
            textSize={19}
            disabled={disabled}
            onPress={handleSubmit}
          >
            Add Dream
          </AwesomeButton>
        </View>
      </ScrollView>
      {showOverlay && (
        <View style={styles.overlay}>
          <MyAppText color="turquoise" align="center">
            Dream Added!
          </MyAppText>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(200,0,0,0)",
    flex: 1,
    margin: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    width: "100%",
    flex: 1,
    height: "20%",
    borderRadius: 15,
    backgroundColor: "hsla(0,0%,0%,0.9)",
    justifyContent: "center",
  },
  emojis: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    marginTop: 0,
    backgroundColor: "#00ced13F",
    borderRadius: 15,
  },
  glass: {
    backgroundColor: "#00ced13F",
    paddingTop: 20,
    borderRadius: 15,
  },
  btn: {
    alignItems: "center",
    margin: 10,
  },
  textBox: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
