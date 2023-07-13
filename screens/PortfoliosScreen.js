import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { GlobalColors } from "../ui/GlobalColors";
import PortfolioItem from "../components/portfolios/PortfolioItem";

function PortfoliosScreen() {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/portfolio_items')
            .then(response => response.json())
            .then(json => setPortfolios(json))
            .catch(error => console.log('portfolios.js', error));
    }, []);

    function portfolioPressHandler(id) {
        console.log('item pressed', id);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Portfolios Screen</Text>

            <FlatList
                data={portfolios}
                renderItem={({ item }) => {
                    return (
                        <PortfolioItem portfolio={item} onPress={portfolioPressHandler} />
                    );
                }}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
            />
        </View>
    );
}

export default PortfoliosScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalColors.portfolioGrey,
    },
});