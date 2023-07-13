import { Text, View, StyleSheet, Pressable, Image } from "react-native";

import image from '../../assets/images/hammer-thumb.jpg';
import { GlobalColors } from "../../ui/GlobalColors";

function PortfolioItem({ portfolio, onPress }) {
    let imageUrl = portfolio.image.url ? `http://localhost:4000${portfolio.image.url}` : image;

    function truncate(str) {
        return str.length > 50 ? str.substring(0, 50) + '...' : str;
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => onPress(portfolio.id)}>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>

                <Text style={styles.title}>{portfolio.title}</Text>
                <Text style={styles.body}>{truncate(portfolio.description)}</Text>
            </Pressable>
        </View>
    );
}

export default PortfolioItem;

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 200,
    },
    imageWrapper: {
        width: '100%',
        height: 100,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: GlobalColors.portfolioBlue,
    },
    body: {
        fontSize: 12,
        color: GlobalColors.portfolioGrey,
    },
});