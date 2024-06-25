import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const SettingsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.profilePic}
        />
        <Text style={styles.userName}>User Name</Text>
      </View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Help" onPress={() => navigation.navigate("Help")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc", // Default background color
  },
  userName: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SettingsPage;
