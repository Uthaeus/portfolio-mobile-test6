import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, Pressable } from "react-native";

import { GlobalColors } from "../ui/GlobalColors";

function PortfolioDetailScreen({ route, navigation }) {
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/portfolio_items/${route.params.id}`)
            .then(response => response.json())
            .then(json => setPortfolio(json))
            .catch(error => console.log('portfolio_detail.js', error));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: `http://localhost:4000${portfolio.image?.url}` }} style={styles.image} />
                </View>

                <View style={styles.headerRight}>
                    <Text style={styles.title}>{portfolio.title}</Text>

                    <Pressable onPress={() => console.log('url link pressed')}>
                        <Text style={styles.url}>{portfolio.url}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default PortfolioDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 16,
        flexDirection: 'row',
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    headerRight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 22,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: GlobalColors.portfolioGrey,
    },
    url: {
        marginLeft: 12,
        fontSize: 16,
        color: GlobalColors.portfolioLightBlue,
    },
});