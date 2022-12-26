import HomeScreen from "../components/HomeScreen";
import Settings from "../components/Settings";
import { Ionicons } from "@expo/vector-icons";
import DreamLog from "../components/DreamLog";
import AddDream from "../components/AddDream";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          size = 30;
          let name;
          if (route.name === "Home") {
            name = focused ? "home" : "home-outline";
          } else if (route.name === "Dreams") {
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
          padding: 0,
        },
      })}
      sceneContainerStyle={{
        backgroundColor: "rgba(0,0,0,0)",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarAccessibilityLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Dreams"
        component={StackNavigation}
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

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="Dream Log" component={DreamLog} />
      <Stack.Screen name="Edit Dream" component={AddDream} />
    </Stack.Navigator>
  );
}
