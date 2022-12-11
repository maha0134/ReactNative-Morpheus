import { useData } from "../context/dataContext";
import { SectionList, View, StyleSheet } from "react-native";
import MyAppText from "./MyAppText";
import MyAppHeadingText from "./MyAppHeadingText";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";
export default function DreamLog() {
  const [, , , , data] = useData();
  console.log(data);
  return (
    <SafeAreaView>
      <MyAppHeadingText>Here is your dream log</MyAppHeadingText>
      {data.length > 0 ? (
        <SectionList
          sections={data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item note={item} />}
          renderSectionHeader={({ section: { id } }) => (
            <MyAppHeadingText>{id}</MyAppHeadingText>
          )}
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
  },
});
