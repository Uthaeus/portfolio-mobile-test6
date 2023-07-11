import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>

            <View style={styles.actionsContainer}>
                <Button onPress={() => navigation.navigate('About')} title="About Me" />
                <Button onPress={() => navigation.navigate('Contact')} title="Contact Me" />
            </View>

            <View style={styles.actionsContainer}>
                <Button onPress={() => navigation.navigate('Blogs')} title="See My Blogs" />
                <Button onPress={() => navigation.navigate('Portfolios')} title="Portfolio Items" />
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});