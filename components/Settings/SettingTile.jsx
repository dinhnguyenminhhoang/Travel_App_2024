import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, TEXT } from "../../constants/theme";
import resuable from "../Resuable/Resuable.style";
import ResuableText from "../Resuable/ResuableText";
import WidthSpacer from "../Resuable/WidthSpacer";
import { AntDesign } from "@expo/vector-icons";

const SettingTile = ({ onPress, title, title1 }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[resuable.rowWithSpace(), styles.container]}
        >
            <ResuableText text={title} color={COLORS.dark} size={TEXT.large} />
            {title === "Language" ? (
                <View style={resuable.rowWithSpace("flex-start")}>
                    <Image
                        source={require("../../assets/images/usa.jpg")}
                        style={styles.image}
                    />
                    <WidthSpacer width={5} />
                    <ResuableText
                        text={"English"}
                        color={COLORS.dark}
                        size={TEXT.large}
                    />
                    <WidthSpacer width={5} />
                    <AntDesign name="right" size={20} color={COLORS.dark} />
                </View>
            ) : (
                <View style={resuable.rowWithSpace("flex-start")}>
                    <ResuableText
                        text={title1}
                        color={COLORS.dark}
                        size={TEXT.large}
                    />
                    <WidthSpacer width={5} />
                    <AntDesign name="right" size={20} color={COLORS.dark} />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default SettingTile;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: COLORS.lightGray,
        paddingVertical: 15,
    },
    image: {
        width: 40,
        height: 30,
        resizeMode: "contain",
    },
});
