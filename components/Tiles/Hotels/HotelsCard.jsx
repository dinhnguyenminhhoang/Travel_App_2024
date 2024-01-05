import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import resuable from "../../Resuable/Resuable.style";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import NetWorkinImage from "../../Resuable/NetWorkinImage";
import HeightSpacer from "../../Resuable/HeightSpacer";
import ResuableText from "../../Resuable/ResuableText";
import Rating from "../../Resuable/Rating";

const HotelsCard = ({ item, margin, onPress }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
            <View>
                <View style={styles.imageContainer}>
                    <NetWorkinImage
                        source={item.imageUrl}
                        height={"100%"}
                        width={"90%"}
                        radiusButtonIOS={16}
                        borderWidth={1}
                        borderColor={COLORS.gray}
                    />
                </View>
                <HeightSpacer height={4} />
                <View style={{ padding: 8 }}>
                    <ResuableText
                        text={item.name}
                        size={SIZES.medium}
                        color={COLORS.black}
                        fontFamily={"mRegular"}
                        textAlign="left"
                    />
                    <HeightSpacer height={4} />
                    <ResuableText
                        text={item.location}
                        size={SIZES.medium}
                        color={COLORS.gray}
                        fontFamily={"mRegular"}
                        textAlign="left"
                    />
                    <HeightSpacer height={4} />
                    <Rating rating={item.rating} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HotelsCard;

const styles = StyleSheet.create({
    card: (margin) => ({
        margin,
        width: SIZES.width / 2.2,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
    }),
    imageContainer: {
        alignItems: "center",
        marginTop: 10,
        height: 150,
    },
});
