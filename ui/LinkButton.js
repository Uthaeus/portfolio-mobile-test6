import { Text, Pressable, StyleSheet } from "react-native";

import { GlobalColors } from "./GlobalColors";

function LinkButton({ title, onPress, backgroundColor, color }) {
    return (
        <Pressable onPress={onPress} style={[styles.button, {backgroundColor: backgroundColor || GlobalColors.silver }]}>
            <Text style={[styles.buttonText, { color: color || GlobalColors.black }]}>{title}</Text>
        </Pressable>
    );
}

export default LinkButton;

const styles = StyleSheet.create({
    button: {
        width: '48%',
        height: 60,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: GlobalColors.grey,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});