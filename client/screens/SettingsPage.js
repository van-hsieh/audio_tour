import React from "react";
import { SafeAreaView, Text, Button } from "react-native";

const SettingsPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Settings Page</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Help" onPress={() => navigation.navigate("Help")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </SafeAreaView>
  );
};

export default SettingsPage;
