// navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/HomePage";
import ItemDetailPage from "../screens/ItemDetailPage";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Detail" component={ItemDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
