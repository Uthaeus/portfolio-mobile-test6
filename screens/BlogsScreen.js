import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

import image from '../assets/images/hammer-thumb.jpg';

import BlogItem from "../components/blogs/BlogItem";
import { GlobalColors } from "../ui/GlobalColors";
import BlogSidebar from "../components/blogs/BlogSidebar";

function BlogsScreen() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(response => response.json())
            .then(json => setBlogs(json))
            .catch(error => console.log('blogs.js', error));
    }, []);

    function categoryFilterHandler() {
        console.log('category filter pressed');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Blogs</Text>
                <Image source={image} style={styles.image} />
            </View>

            <View style={styles.body}>
                <View style={styles.listWrapper}>
                    <FlatList
                        data={blogs}
                        renderItem={({ item }) => {
                            return (
                                <BlogItem blog={item} onPress={() => console.log('pressed')} />
                            );
                        }}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>

                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>filter by category:</Text>
                    <BlogSidebar onPress={categoryFilterHandler} />
                </View>
            </View>
        </View>
    );
}

export default BlogsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '90%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: GlobalColors.grey,
        marginVertical: 10,
        marginHorizontal: '5%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: GlobalColors.blogDarkBlue,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    body: {
        height: 600,
        flexDirection: 'row',
    },
    listWrapper: {
        width: '65%',
    },
    categoriesWrapper: {
        width: '35%',
        padding: 10,
    },
    categoriesTitle: {
        fontSize: 10
    }
});