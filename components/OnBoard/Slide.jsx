import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./slide.style";
import { COLORS, SIZES } from "../../constants/theme";
import ResuableText from "../Resuable/ResuableText";
import ResuableBtn from "../Buttons/ResuableBtn";
import HeightSpacer from "../Resuable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";
export default function Slide({ item }) {
    const navigation = useNavigation();
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
                <HeightSpacer height={20} />
                <ResuableBtn
                    onPress={() => navigation.navigate("Bottom")}
                    text={"Let's go"}
                    width={(SIZES.width - 50) / 2.2}
                    bgColor={COLORS.red}
                    borderColor={COLORS.red}
                    borderWidth={0}
                    textColor={COLORS.white}
                />
            </View>
        </View>
    );
}
