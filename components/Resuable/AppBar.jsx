import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import resuable from "./Resuable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import ResuableText from "./ResuableText";

export default function AppBar({
    color,
    color1,
    title,
    icon,
    onPress,
    onPress1,
    top,
    left,
    right,
}) {
    return (
        <View style={styles.overlay(top, left, right)}>
            <View style={resuable.rowWithSpace("space-between")}>
                <TouchableOpacity style={styles.box(color)} onPress={onPress}>
                    <AntDesign name="left" size={26} />
                </TouchableOpacity>
                <ResuableText
                    text={title}
                    size={TEXT.large}
                    color={COLORS.black}
                    fontFamily={"mRegular"}
                />
                <TouchableOpacity
                    style={styles.box1(color1)}
                    onPress={onPress1}
                >
                    <AntDesign name={icon} size={26} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: (top, left, right) => ({
        position: "absolute",
        top: top || 10,
        left: left || 0,
        right: right || 0,
        justifyContent: "center",
    }),
    box: (color) => ({
        backgroundColor: color || "white",
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    }),
    box1: (color1) => ({
        backgroundColor: color1 || "white",
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    }),
});
