import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";

export default function ResuableBtn({
    onPress,
    text,
    textColor,
    width,
    bgColor,
    borderWidth,
    borderColor,
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle(width, bgColor, borderWidth, borderColor)}
        >
            <Text style={styles.textBtn(textColor)}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnStyle: (width, bgColor, borderWidth, borderColor) => ({
        width: width,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: SIZES.small,
    }),
    textBtn: (textColor) => ({
        color: textColor,
        fontWeight: "medium",
        fontSize: SIZES.medium,
    }),
});
