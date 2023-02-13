import { Text } from "react-native";
export default function MyAppHeadingText(props) {
  return (
    <Text
      style={{
        fontFamily: props.bold ? "MerriweatherBold" : "Merriweather",
        fontSize: props.font ?? 35,
        textAlign: "center",
        paddingTop: props.paddingTop ?? 12,
        paddingBottom: props.paddingBottom ?? 12,
        color: props.color ?? "azure",
        margin: props.margin ?? 10,
      }}
    >
      {props.children}
    </Text>
  );
}
