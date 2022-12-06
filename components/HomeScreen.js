import { View, StyleSheet, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAppHeadingText from "./MyAppHeadingText";
import MyAppText from "./MyAppText";
import { FontAwesome5, Entypo, Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import Slider from "@react-native-community/slider";
import { ScrollView } from "react-native-gesture-handler";
import AwesomeButton from "react-native-really-awesome-button";
import { getDate } from "../helpers/helperFunctions";

export default function HomeScreen() {
  const color = "silver";
  const [selectedValue, setSelectedValue] = useState(null);
  const detailsRef = useRef(0);
  const size = 36;
  const selectedSize = 42;
  const selectedColor = "cyan";
  const [disabled, setDisabled] = useState(true);
  const [name, handleNameChange] = useState(null);
  const [details, handleDetailsChange] = useState(null);
  const [sliderValue, setSliderValue] = useState(7);
  useEffect(() => {
    selectedValue && name && details ? setDisabled(false) : setDisabled(true);
  }, [selectedValue, name, details]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MyAppHeadingText heading={1} color="aquamarine">
          Good Morning Sleepyhead!
        </MyAppHeadingText>
        <View style={styles.date}>
          <Ionicons name="today" size={25} color="white" />
          <MyAppText align="center" color="aquamarine">
            {getDate()}
          </MyAppText>
        </View>
        <MyAppText>How was your night?</MyAppText>
        <View style={styles.emojis}>
          <FontAwesome5
            name="sad-cry"
            size={selectedValue === 0 ? selectedSize : size}
            color={selectedValue === 0 ? selectedColor : color}
            onPress={() => setSelectedValue(0)}
          />
          <Entypo
            name="emoji-sad"
            size={selectedValue === 1 ? selectedSize : size}
            color={selectedValue === 1 ? selectedColor : color}
            onPress={() => setSelectedValue(1)}
          />
          <Entypo
            name="emoji-neutral"
            size={selectedValue === 2 ? selectedSize : size}
            color={selectedValue === 2 ? selectedColor : color}
            onPress={() => setSelectedValue(2)}
          />
          <Entypo
            name="emoji-happy"
            size={selectedValue === 3 ? selectedSize : size}
            color={selectedValue === 3 ? selectedColor : color}
            onPress={() => setSelectedValue(3)}
          />
          <FontAwesome5
            name="laugh-beam"
            size={selectedValue === 4 ? selectedSize : size}
            color={selectedValue === 4 ? selectedColor : color}
            onPress={() => setSelectedValue(4)}
          />
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
          style={[styles.textBox, { borderRadius: 10, marginBottom: 0 }]}
        />
        <MyAppText>Dream details</MyAppText>
        <TextInput
          placeholder="I was on a horse..."
          multiline
          numberOfLines={5}
          style={styles.textBox}
          ref={detailsRef}
          onChangeText={handleDetailsChange}
          value={details}
        />
        <View style={styles.btn}>
          <AwesomeButton
            progress
            animatedPlaceholder
            backgroundColor={disabled ? "gray" : "teal"}
            raiseLevel={disabled ? 0 : 2}
            borderRadius={75}
            backgroundDarker="silver"
            paddingHorizontal={25}
            height={45}
            textSize={19}
            disabled={disabled}
            onPress={async (next) => {
              /** await for something; then: **/
              // next();
            }}
          >
            Add Dream
          </AwesomeButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(200,0,0,0)",
    flex: 1,
    margin: 16,
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
    borderRadius: 15,
    marginBottom: 15,
  },
  date: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
