import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome back! Glad to see you again</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Button title="Forgot Password?" onPress={() => {}} />
      <Button title="Login" onPress={() => {}} />
      <Text style={styles.orText}>Or login with</Text>
      <Button title="Facebook" onPress={() => {}} />
      <Button title="Google" onPress={() => {}} />
      <Button title="Apple" onPress={() => {}} />
      <View style={styles.registerContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  orText: {
    marginVertical: 10,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default LoginPage;
