// screens/ItemDetailPage.js
import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

function ItemDetailPage({ route, navigation }) {
  const { itemId } = route.params; // Assume itemId is passed from navigation

  // Placeholder details for the item
  const item = {
    title: "Sample Title",
    description: "This is a sample description of the item.",
    imageUrl: "https://via.placeholder.com/150",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
      <Button
        title="Play Audio"
        onPress={() => {
          /* Audio play logic here */
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ItemDetailPage;
