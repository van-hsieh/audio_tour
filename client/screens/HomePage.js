// screens/HomePage.js
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { fetchAttractions } from "../services/api"; // make sure the path is correct

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
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { item })}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
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
    </View>
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
