import { Text } from "react-native";
export default function MyAppHeadingText(props) {
  return (
    <Text
      style={{
        fontFamily: "Merriweather",
        fontSize: props.heading === 1 ? 43 : 32,
        textAlign: "center",
        paddingTop: 12,
        paddingBottom: 12,
        color: props.color ?? "azure",
        margin: props.margin ?? 10,
      }}
    >
      {props.children}
    </Text>
  );
}
