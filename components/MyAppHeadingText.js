import { Text } from "react-native";
export default function MyAppHeadingText(props) {
  return (
    <Text
      style={{
        // fontFamily: "QuanticoBold",
        fontSize: props.heading === 1 ? 48 : 32,
        textAlign: "center",
        paddingTop: 12,
        paddingBottom: 12,
        color: props.color ?? "azure",
      }}
    >
      {props.children}
    </Text>
  );
}
