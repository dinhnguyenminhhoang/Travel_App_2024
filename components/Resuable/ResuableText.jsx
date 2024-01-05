import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ResuableText({
    text,
    size,
    color,
    fontWeight,
    textAlign = "center",
    fontFamily,
}) {
    return (
        <Text
            style={styles.text(size, color, fontWeight, textAlign, fontFamily)}
        >
            {text}
        </Text>
    );
}
const styles = StyleSheet.create({
    text: (size, color, fontWeight, textAlign, fontFamily) => ({
        fontSize: size,
        color: color,
        fontWeight: fontWeight,
        textAlign: textAlign || "center",
        fontFamily: fontFamily,
    }),
});
