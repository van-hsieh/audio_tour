import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const AboutPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/splash.png")} style={styles.image} />
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.text}>
        We are a group of passionate travelers who have ventured the globe solo
        and in groups, experiencing the rich cultures and histories that every
        destination has to offer. Our journey led us to create Audio Atlas, an
        app designed by and for travel enthusiasts.
      </Text>
      <Text style={styles.text}>
        We understand the nuances and challenges of exploring new places,
        especially when you're going at it alone. That's why we've designed our
        app to be your personal guide, sharing stories and insights about
        attractions around the world, helping you connect more deeply with the
        places you visit.
      </Text>
      <Text style={styles.text}>
        Our mission is to enrich your travel experiences, making every trip
        unforgettable and full of learning. We love to create and help the rest
        of the community by sharing what we know and learning from each of you.
        Join us in exploring the world in a more meaningful way!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
});

export default AboutPage;
