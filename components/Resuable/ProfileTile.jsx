import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import resuable from "./Resuable.style";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ResuableText from "./ResuableText";
import { COLORS, SIZES } from "../../constants/theme";

const ProfileTile = ({ onPress, title, icon }) => {
    return (
        <TouchableOpacity style={styles.tile} onPress={onPress}>
            <View style={resuable.rowWithSpace()}>
                <View style={resuable.rowWithSpace("flex-start")}>
                    <AntDesign name={icon} size={20} />
                    <WidthSpacer width={15} />
                    <ResuableText
                        text={title}
                        fontFamily={"mRegular"}
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />
                </View>
                <AntDesign size={20} name="right" />
            </View>
        </TouchableOpacity>
    );
};

export default ProfileTile;

const styles = StyleSheet.create({
    tile: {
        backgroundColor: COLORS.white,
        marginVertical: 6,
        padding: 16,
        borderRadius: 10,
    },
});
