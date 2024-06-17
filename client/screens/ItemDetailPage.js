import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { Audio } from "expo-av";

function ItemDetailPage({ route }) {
  const { item } = route.params;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadAudio();

    return () => {
      sound?.unloadAsync(); // Ensure the sound is unloaded when the component is unmounted
    };
  }, []);

  async function loadAudio() {
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: `http://localhost:4000/api/attractions/audio/test_audio1.mp3`,
      },
      { shouldPlay: false }
    );
    setSound(sound);
  }

  const togglePlayback = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    }
  };

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
      <Button title={isPlaying ? "Pause" : "Play"} onPress={togglePlayback} />
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
