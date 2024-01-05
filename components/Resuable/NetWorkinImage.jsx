import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NetWorkinImage({
    source,
    width,
    height,
    radiusButtonIOS,
}) {
    return (
        <Image
            source={{ uri: source }}
            style={styles.image(width, height, radiusButtonIOS)}
        />
    );
}

const styles = StyleSheet.create({
    image: (width, height, radiusButtonIOS) => ({
        width,
        height,
        borderRadius: radiusButtonIOS,
        resizeMode: "cover",
    }),
});
