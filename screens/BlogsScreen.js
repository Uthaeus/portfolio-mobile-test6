import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

function BlogsScreen() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(response => response.json())
            .then(json => setBlogs(json))
            .catch(error => console.log('blogs.js', error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blogs Screen</Text>

            <FlatList
                data={blogs}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.blogContainer}>
                            <Text style={styles.blogTitle}>{item.title}</Text>
                            <Text style={styles.blogBody}>{item.body}</Text>
                        </View>
                    );
                }}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default BlogsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    blogContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    blogTitle: {
        fontSize: 18,
        color: 'blue',
    },
    blogBody: {
        fontSize: 12,
        color: 'green',
    },
});