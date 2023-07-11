import { View, Text, Button, StyleSheet } from "react-native";

import LinkButton from "../ui/LinkButton";

import { GlobalColors } from "../ui/GlobalColors";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>

            <View style={styles.actionsContainer}>
                <LinkButton onPress={() => navigation.navigate('About')} title="About Me" backgroundColor={GlobalColors.lightSilver} color='black' />
                <LinkButton onPress={() => navigation.navigate('Contact')} title="Contact Me" backgroundColor={GlobalColors.lightSilver} color='black' />
            </View>

            <View style={styles.actionsContainer}>
                <LinkButton onPress={() => navigation.navigate('Blogs')} title="See My Blogs" backgroundColor={GlobalColors.lightSilver} color='black' />
                <LinkButton onPress={() => navigation.navigate('Portfolios')} title="Portfolio Items" backgroundColor={GlobalColors.lightSilver} color='black' />
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