import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Falaaa Marcelooo</Text>
            <Text style={styles.textRed}>Forte abraço</Text>
            <Text style={styles.textGreen}>Quebrada</Text>
            <Image source={require("./public/dogmelancia.png")} style={{ width: 200, height: 200, borderRadius: 40 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        gap: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
    },
    textRed: {
        color: "red",
        fontSize: 30,
    },
    textGreen: {
        color: "green",
        fontSize: 30,
    },
});