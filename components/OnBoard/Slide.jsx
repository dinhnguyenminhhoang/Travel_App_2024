import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./slide.style";
import { COLORS, SIZES } from "../../constants/theme";
import ResuableText from "../Resuable/ResuableText";
export default function Slide({ item }) {
    return (
        <View>
            <Image source={item.image} style={styles.image} />
            <View style={styles.stack}>
                <ResuableText
                    text={item.title}
                    size={SIZES.xLarge}
                    color={COLORS.white}
                    fontWeight={"bold"}
                />
            </View>
        </View>
    );
}
