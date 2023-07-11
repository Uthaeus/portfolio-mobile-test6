import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

function PortfoliosScreen() {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/portfolio_items')
            .then(response => response.json())
            .then(json => setPortfolios(json))
            .catch(error => console.log('portfolios.js', error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Portfolios Screen</Text>

            <FlatList
                data={portfolios}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.portfolioContainer}>
                            <Text style={styles.portfolioTitle}>{item.title}</Text>
                            <Text style={styles.portfolioBody}>{item.body}</Text>
                        </View>
                    );
                }}
                keyExtractor={item => item.id.toString()}
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
        color: 'red',
    },
    portfolioContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    portfolioTitle: {
        fontSize: 18,
        color: 'blue',
    },
    portfolioBody: {
        fontSize: 12,
        color: 'green',
    }
});