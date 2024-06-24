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
    >
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: `${imageUrl}/${item.thumbnail_url}` }}
          style={{ width: 128, height: 128 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>
            {item.city}, {item.state}, {item.country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={globalStyles.container}>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
      {/* insert a button, on click, go to settings */}
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings_Stack")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default HomePage;
