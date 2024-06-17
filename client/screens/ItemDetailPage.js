import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import axios from "axios";

function ItemDetailPage({ route, navigation }) {
  const { item } = route.params;
  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/attractions/audio/${item.audioSource}`,
          { responseType: "blob" }
        );
        setAudioFile(response.data);
      } catch (error) {
        console.error("Failed to fetch audio:", error);
      }
    };

    fetchAudio();
  }, [item]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>
        {item.city}, {item.state}, {item.country}
      </Text>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.image}
      />
      <Text style={styles.description}>{item.description}</Text>
      <Button
        title="Play Audio"
        onPress={() => {
          /* Logic to play audio */
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
