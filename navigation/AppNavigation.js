import HomeScreen from "../components/HomeScreen";
import AddDream from "../components/AddDream";
import Settings from "../components/Settings";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            let name = focused ? "home" : "home-outline";
            return <Ionicons name={name} size={size} color={color} />;
          } else if (route.name === "Settings") {
            let name = focused ? "ios-settings" : "ios-settings-outline";
            return <Ionicons name={name} size={size} color={color} />;
          } else if (route.name === "Add Dream") {
            let name = focused ? "add-circle-sharp" : "add-circle-outline";
            return <Ionicons name={name} size={size} color={color} />;
          }
        },
        // tabBarActiveTintColor: "lightseagreen",
        // tabBarInactiveTintColor: "lightseagreen",
        tabBarLabelStyle: styles.label,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "pink",
        },

        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0)",
          elevation: 0,
          position: "absolute",
          borderColor: "rgba(0,0,0,0)",
          borderTopWidth: 0,
        },
      })}
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
        name="Add Dream"
        component={AddDream}
        options={{ tabBarAccessibilityLabel: "Add Dream" }}
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
