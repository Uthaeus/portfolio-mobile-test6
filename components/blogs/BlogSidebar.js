import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { GlobalColors } from "../../ui/GlobalColors";

function BlogSidebar({ onPress, currentCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json))
      .catch((error) => console.log("categories.js", error));
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onPress("all")}>
        <Text style={styles.reset}>reset</Text>
      </Pressable>

      <FlatList
        data={categories}
        renderItem={({ item }) => {
          return (
            <View style={styles.categoryWrapper}>
              <Pressable onPress={() => onPress(item.name)}>
                <Text
                  style={[
                    styles.category,
                    currentCategory === item.name && styles.activeCategory,
                  ]}
                >
                  {item.name}
                </Text>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default BlogSidebar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reset: {
    fontSize: 14,
    color: GlobalColors.outerSpace,
    marginVertical: 5,
    marginLeft: 10,
  },
  categoryWrapper: {
    paddingVertical: 5,
    paddingLeft: 10,
  },
  list: {
    justifyContent: "space-between",
  },
  category: {
    fontSize: 20,
    color: GlobalColors.blogGrey,
  },
  activeCategory: {
    color: GlobalColors.blogDarkBlue,
    transform: [{ scale: 1.2 }],
    textDecorationLine: "underline",
  },
});
