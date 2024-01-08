import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TEXT } from "../../constants/theme";

const DescriptionText = ({ text, lines }) => {
    return (
        <Text numberOfLines={lines} style={styles.description}>
            {text}
        </Text>
    );
};

export default DescriptionText;

const styles = StyleSheet.create({
    description: {
        paddingVertical: 10,
        fontFamily: "mRegular",
        textAlign: "justify",
        fontSize: TEXT.medium,
    },
});
