import { Text } from "react-native";

export default function MyAppText(props) {
  return (
    <Text
      style={{
        fontFamily: "MerriweatherLight",
        fontSize: props.size ?? 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: props.marginTop ?? 10,
        marginBottom: props.marginBottom ?? 10,
        textAlign: props.align ?? "left",
        flexWrap: "wrap",
        color: props.color ?? "azure",
      }}
    >
      {props.children}
    </Text>
  );
}
