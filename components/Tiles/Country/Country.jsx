import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";
import NetWorkinImage from "../../Resuable/NetWorkinImage";
import ResuableText from "../../Resuable/ResuableText";
import HeightSpacer from "../../Resuable/HeightSpacer";
import { useNavigation } from "@react-navigation/native";

export default function Country({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("CountryDetail", item)}
        >
            <View>
                <NetWorkinImage
                    height={85}
                    width={85}
                    radiusButtonIOS={12}
                    source={item.imageUrl}
                />
                <HeightSpacer height={8} />
                <ResuableText
                    text={item.country}
                    size={SIZES.medium}
                    color={COLORS.black}
                    fontWeight={"medium"}
                    fontFamily={"homeFont"}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({});
