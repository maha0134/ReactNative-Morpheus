import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAppHeadingText from "./MyAppHeadingText";
import MyAppText from "./MyAppText";
import { useEffect, useState } from "react";
import { getDate } from "../helpers/helperFunctions";
import { useData } from "../context/dataContext";
import AddDream from "./AddDream";

export default function HomeScreen() {
  const date = getDate();
  const [, , displayName, , data] = useData();
  const [dreamExists, setDreamExists] = useState(false);
  useEffect(() => {
    if (data.length > 0) {
      const dream = data.find((item) => item.id === date);
      if (dream) {
        setDreamExists(true);
      }
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      {dreamExists ? (
        <>
          <MyAppHeadingText heading={1}>Hey there!</MyAppHeadingText>
          <MyAppText>
            Looks like you have already logged last night's dream.
          </MyAppText>
          <MyAppText>Remember additional details?</MyAppText>
          <MyAppText>
            You can click the journal button below and edit your dream.
          </MyAppText>
        </>
      ) : (
        <AddDream />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(200,0,0,0)",
    flex: 1,
    margin: 16,
    justifyContent: "center",
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
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
