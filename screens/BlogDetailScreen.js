import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image, Pressable } from "react-native";

import { GlobalColors } from "../ui/GlobalColors";

function BlogDetailScreen({ route, navigation}) {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/blogs/${route.params.id}`)
            .then(response => response.json())
            .then(json => setBlog(json))
            .catch(error => console.log('blog_detail.js', error));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: `http://localhost:4000${blog.image?.url}` }} style={styles.image} />
                </View>

                <View style={styles.headerRight}>
                    <Text style={styles.title}>{blog.title}</Text>

                    <Pressable onPress={() => console.log('url link pressed')}>
                        <Text style={styles.url}>{blog.url}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default BlogDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 16,
        flexDirection: 'row',
    },
});