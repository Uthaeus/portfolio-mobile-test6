import { View, Text, StyleSheet, Pressable } from "react-native";

import { GlobalColors } from "../../ui/GlobalColors";

function BlogItem( { blog, onPress } ) {

    function truncate(str) {
        return str.length > 60 ? str.substring(0, 58) + "..." : str;
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Text style={styles.title}>{blog.title}</Text>

                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>{truncate(blog.body)}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default BlogItem;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});