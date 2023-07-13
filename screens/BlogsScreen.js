import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Pressable } from "react-native";

import image from '../assets/images/hammer-thumb.jpg';

import BlogItem from "../components/blogs/BlogItem";
import { GlobalColors } from "../ui/GlobalColors";
import BlogSidebar from "../components/blogs/BlogSidebar";

function BlogsScreen({ navigation }) {
    const [blogs, setBlogs] = useState([]);
    const [displayedBlogs, setDisplayedBlogs] = useState([]); 
    const [currentCategory, setCurrentCategory] = useState('all');

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(response => response.json())
            .then(json => {
                setBlogs(json);
                setDisplayedBlogs(json);
            })
            .catch(error => console.log('blogs.js', error));
    }, []);

    function categoryFilterHandler(cat) {
        setCurrentCategory(cat);
        if (cat === 'all') {
            setDisplayedBlogs(blogs);
            return;
        } else {
            const filteredBlogs = blogs.filter(blog => blog.category_id === cat);
            setDisplayedBlogs(filteredBlogs);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.title}>My Blogs</Text>

                    <View style={styles.headerLink}>
                        <Pressable onPress={() => navigation.navigate('Portfolios')}>
                            <Text style={styles.link}>visit my portfolios</Text>
                        </Pressable>
                    </View>
                </View>

                <Image source={image} style={styles.image} />
            </View>

            <View style={styles.body}>
                <View style={styles.listWrapper}>
                    <FlatList
                        data={displayedBlogs}
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

                    <BlogSidebar onPress={categoryFilterHandler} currentCategory={currentCategory} />
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
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
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
    headerLeft: {
        flexDirection: 'column',
    },
    headerLink: {
        marginTop: 10,
        marginLeft: 20,
        paddingVertical: 0,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: GlobalColors.grey,
        backgroundColor: GlobalColors.lightSilver,
        shadowColor: GlobalColors.outerSpace,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
    },
    link: {
        fontSize: 12,
        color: GlobalColors.outerSpace,
    },
    body: {
        height: 600,
        flexDirection: 'row',
    },
    listWrapper: {
        width: '65%',
    },
    categoriesWrapper: {
        width: '33%',
        height: 500,
        marginRight: '2%',
        padding: 10,
        backgroundColor: GlobalColors.lightSilver,
    },
    categoriesTitle: {
        fontSize: 10
    }
});