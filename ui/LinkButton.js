import { Text, Pressable, StyleSheet } from "react-native";

import { GlobalColors } from "./GlobalColors";

function LinkButton({ title, onPress, backgroundColor, color }) {
    return (
        <Pressable onPress={onPress} style={[styles.button, {backgroundColor: backgroundColor || 'blue'}]}>
            <Text style={[styles.buttonText, { color: color || 'white'}]}>{title}</Text>
        </Pressable>
    );
}

export default LinkButton;

const styles = StyleSheet.create({
    button: {
        width: '33%',
        height: 30,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: GlobalColors.grey,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8
    },
    buttonText: {
        fontSize: 14,
    }
});