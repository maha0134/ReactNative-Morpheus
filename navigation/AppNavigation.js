import HomeScreen from "../components/HomeScreen";
import Settings from "../components/Settings";
import { Ionicons } from "@expo/vector-icons";
import DreamLog from "../components/DreamLog";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          size = 30;
          let name;
          if (route.name === "Home") {
            name = focused ? "home" : "home-outline";
          } else if (route.name === "Dream Log") {
            name = focused ? "book" : "book-outline";
          } else {
            name = focused ? "ios-settings" : "ios-settings-outline";
          }
          return <Ionicons name={name} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0)",
          elevation: 0,
          margin: 5,
          borderTopWidth: 0,
        },
      })}
      sceneContainerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Dream Log"
        component={DreamLog}
        options={{ tabBarAccessibilityLabel: "Dream Log" }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarAccessibilityLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 14,
  },
});
