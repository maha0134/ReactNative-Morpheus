import { useData } from "../context/dataContext";
import { SectionList, View, StyleSheet } from "react-native";
import MyAppText from "./MyAppText";
import MyAppHeadingText from "./MyAppHeadingText";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";
export default function DreamLog() {
  const [, , , , dreamData] = useData();
  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeadingText>Dream log</MyAppHeadingText>
      {dreamData.length > 0 ? (
        <SectionList
          sections={dreamData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item note={item} />}
          renderSectionHeader={({ section: { id } }) => (
            <MyAppHeadingText color="cyan" padding>
              {id}
            </MyAppHeadingText>
          )}
          style={styles.scroll}
        />
      ) : (
        <View style={styles.container}>
          <MyAppText>Looks like there are no entries.</MyAppText>
          <MyAppText>Please add details about your dream.</MyAppText>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
    justifyContent: "center",
    flex: 1,
  },
  scroll: {
    borderRadius: 15,
    flex: 1,
  },
});
