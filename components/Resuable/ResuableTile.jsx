import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import resuable from "./Resuable.style";
import { COLORS, SIZES } from "../../constants/theme";
import NetWorkinImage from "./NetWorkinImage";
import WidthSpacer from "./WidthSpacer";
import ResuableText from "./ResuableText";
import HeightSpacer from "./HeightSpacer";
import Rating from "./Rating";

export default function ResuableTile({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={resuable.rowWithSpace("flex-start")}>
                <NetWorkinImage
                    height={80}
                    width={80}
                    radiusButtonIOS={12}
                    source={item.imageUrl}
                />
                <WidthSpacer width={16} />
                <View>
                    <ResuableText
                        text={item.title}
                        size={SIZES.medium}
                        color={COLORS.black}
                        fontWeight={"medium"}
                        fontFamily={"mRegular"}
                        textAlign="left"
                    />
                    <HeightSpacer height={6} />
                    <ResuableText
                        text={item.location}
                        size={14}
                        color={COLORS.gray}
                        fontWeight={"medium"}
                        fontFamily={"mRegular"}
                        textAlign="left"
                    />
                    <HeightSpacer height={6} />
                    <View style={resuable.rowWithSpace("flex-start")}>
                        <Rating rating={item.rating} />
                        <WidthSpacer width={6} />
                        <ResuableText
                            text={` (${item.review}) `}
                            size={14}
                            color={COLORS.gray}
                            fontWeight={"medium"}
                            fontFamily={"mRegular"}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
    },
});
