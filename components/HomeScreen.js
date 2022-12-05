import { View, StyleSheet, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAppHeadingText from "./MyAppHeadingText";
import MyAppText from "./MyAppText";
import { FontAwesome5, Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { ScrollView } from "react-native-gesture-handler";
import AwesomeButton from "react-native-really-awesome-button";

export default function HomeScreen() {
  const color = "silver";
  const [selectedValue, setSelectedValue] = useState(null);
  const size = 36;
  const selectedSize = 42;
  const selectedColor = "cyan";
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState(false);

  const [sliderValue, setSliderValue] = useState(7);

  function handleEdit(text) {
    text.length > 0 ? setText(true) : setText(false);
  }
  useEffect(() => {
    selectedValue && text ? setDisabled(false) : setDisabled(true);
  }, [selectedValue, text]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <MyAppHeadingText heading={1}>
          Good Morning Sleepyhead!
        </MyAppHeadingText>
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
        <MyAppText>Dream Diary</MyAppText>
        <TextInput
          placeholder="Enter dream details..."
          multiline
          numberOfLines={6}
          style={{
            backgroundColor: "lightgray",
            borderWidth: 1,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 25,
            paddingRight: 25,
            borderRadius: 15,
            marginBottom: 15,
          }}
          onChangeText={handleEdit}
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
});
