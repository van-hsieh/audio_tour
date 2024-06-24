// navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderBackButton } from "@react-navigation/elements";
import Icon from "react-native-vector-icons/FontAwesome";
import HomePage from "../screens/HomePage";
import ItemDetailPage from "../screens/ItemDetailPage";
import SettingsPage from "../screens/SettingsPage";
import LoginPage from "../screens/LoginPage";
import HelpPage from "../screens/HelpPage";
import AboutPage from "../screens/AboutPage";
import LibraryPage from "../screens/LibraryPage";

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SettingsStackScreen({ navigation }) {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate("Home")}
              labelVisible={false}
            />
          ),
        }}
      />
      <SettingsStack.Screen name="Login" component={LoginPage} />
      <SettingsStack.Screen name="Help" component={HelpPage} />
      <SettingsStack.Screen name="About" component={AboutPage} />
    </SettingsStack.Navigator>
  );
}
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Detail" component={ItemDetailPage} />
    </HomeStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Library") {
            iconName = "book";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: [
          {
            display: "flex",
          },
        ],
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings_Stack"
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen name="Library" component={LibraryPage} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default AppNavigator;
