// screens/HomePage.js
import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { fetchAttractions } from "../services/api";
import { globalStyles, colors } from "./GlobalStyle";
import Icon from "react-native-vector-icons/FontAwesome";

const imageUrl = "http://localhost:4000/images";

function HomePage({ navigation }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadItems = async (pageNum) => {
    if (!loading && hasMore) {
      setLoading(true);
      try {
        const newItems = await fetchAttractions(pageNum);
        setItems((prevItems) => [...prevItems, ...newItems]);
        setPage(pageNum);
        setHasMore(newItems.length > 0);
      } catch (error) {
        console.error("Failed to load items:", error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems(0);
  }, []);

  const handleLoadMore = () => {
    if (items.length >= (page + 1) * 20) {
      loadItems(page + 1);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { item, name: item.name })}
      style={{ width: "50%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: `${imageUrl}/${item.thumbnail_url}` }}
          style={{ width: 100, height: 128 }}
          // style={styles.cardImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={globalStyles.saveAreaContainer}>
      <View style={globalStyles.container}>
        {/* Top Container: search & settings */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Icon
            name="search"
            size={20}
            color="#000"
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings_Stack")}
            style={{
              marginBottom: 15,
            }}
          >
            <Icon name="cog" size={25} color="#000" />
          </TouchableOpacity>
        </View>
        {/* Body: List of top or nearby attractions */}
        <FlatList
          data={items}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    fontSize: 18,
    width: "90%",
    height: 50,
    marginBottom: 15,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    paddingLeft: 50, // Add some padding to the left
  },
  itemText: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    marginBottom: 10,
  },
  itemContainer: {
    width: "100%", // Ensures the container takes full width of the TouchableOpacity
    alignItems: "center", // Aligns children (image + text container) in the center
    marginBottom: 10, // Adds some space below each item
    borderRadius: 10, // Rounds the corners
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%", // 100% of its container's width
    aspectRatio: 1, // Ensures the height is the same as the width
    borderRadius: 10, // Rounds the corners
  },
  textContainer: {
    // your existing styles for the text container
  },
  title: {
    // your existing styles for the title
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
  },
  searchIcon: {
    position: "absolute",
    left: 15,
    top: 15,
    zIndex: 1,
  },
});

export default HomePage;
