import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ResuableText({ text, size, color, fontWeight }) {
    return <Text style={styles.text(size, color, fontWeight)}>{text}</Text>;
}
const styles = StyleSheet.create({
    text: (size, color, fontWeight) => ({
        fontSize: size,
        color: color,
        fontWeight: fontWeight,
    }),
});
