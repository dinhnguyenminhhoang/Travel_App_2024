import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NetWorkinImage({
    source,
    width,
    height,
    radiusButtonIOS,
    borderWidth,
    borderColor,
}) {
    return (
        <Image
            source={{ uri: source }}
            style={styles.image(
                width,
                height,
                radiusButtonIOS,
                borderWidth,
                borderColor
            )}
        />
    );
}

const styles = StyleSheet.create({
    image: (width, height, radiusButtonIOS, borderWidth, borderColor) => ({
        width,
        height,
        borderRadius: radiusButtonIOS,
        resizeMode: "cover",
        borderWidth: borderWidth,
        borderColor: borderColor,
    }),
});
