import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AssetImage = ({ source, width, height, radiusButtonIOS, mode }) => {
    return (
        <Image
            source={source}
            style={styles.image(width, height, radiusButtonIOS, mode)}
        />
    );
};

export default AssetImage;

const styles = StyleSheet.create({
    image: (width, height, radiusButtonIOS, mode) => ({
        width,
        height,
        borderRadius: radiusButtonIOS,
        resizeMode: mode || "contain",
    }),
});
