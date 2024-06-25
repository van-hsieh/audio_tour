import React from "react";
import { View, Text, Button, StyleSheet, Linking } from "react-native";

const HelpPage = () => {
  const handleEmailSupport = () => {
    // Open default mail app with email
    Linking.openURL("mailto:audio.atlas.app@gmail.com");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Need help? Contact our support team via email and we will get back to
        you as soon as possible.
      </Text>
      <Button title="Send Email" onPress={handleEmailSupport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default HelpPage;
