import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const imageUrl = "http://localhost:4000/images";
const Card = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={{ uri: `${imageUrl}/${item.thumbnail_url}` }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  name: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
