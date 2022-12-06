import HomeScreen from "../components/HomeScreen";
import Settings from "../components/Settings";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import DreamLog from "../components/DreamLog";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          size = 30;
          if (route.name === "Home") {
            let name = focused ? "home" : "home-outline";
            return <Ionicons name={name} size={size} color={color} />;
          } else if (route.name === "Dream Log") {
            let name = focused ? "book" : "book-outline";
            return <Ionicons name={name} size={size} color={color} />;
          } else if (route.name === "Settings") {
            let name = focused ? "ios-settings" : "ios-settings-outline";
            return <Ionicons name={name} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: styles.label,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: "rgba(0,0,0,0)",
        },
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
          headerShown: false,
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
      {/* <Tab.Screen name="Team" component={StackNavigation} /> */}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 14,
  },
});
