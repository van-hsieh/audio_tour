import { StyleSheet } from "react-native";

export const colors = {
  primary: "#4CAF50", // Green
  secondary: "#FFC107", // Amber
  accent: "#607D8B", // Blue Grey
  background: "#FFFFFF", // White
  text: "#212121", // Nearly Black
};

export const globalStyles = StyleSheet.create({
  saveAreaContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    color: colors.text,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
