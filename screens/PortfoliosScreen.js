import { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { GlobalColors } from "../ui/GlobalColors";
import PortfolioButton from "../ui/PortfolioButton";
import PortfolioItem from "../components/portfolios/PortfolioItem";

function PortfoliosScreen({ navigation }) {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/portfolio_items')
            .then(response => response.json())
            .then(json => setPortfolios(json))
            .catch(error => console.log('portfolios.js', error));
    }, []);

    function portfolioPressHandler(id) {
        navigation.navigate('PortfolioDetail', { id: id });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>my projects</Text>

                <View style={styles.actionsContainer}>
                    <PortfolioButton title='my blogs' onPress={() => navigation.navigate('Blogs')} />
                    <PortfolioButton title='about me' onPress={() => navigation.navigate('About')} />
                    <PortfolioButton title='contact me' onPress={() => navigation.navigate('Contact')} />
                </View>
            </View>

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
        flexDirection: 'column',
    },
    header: {
        width: '75%',
        height: 80,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: GlobalColors.portfolioBlue,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: GlobalColors.portfolioGrey,
    },
});