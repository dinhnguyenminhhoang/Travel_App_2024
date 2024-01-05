import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import resuable from "./Resuable.style";
import ResuableText from "./ResuableText";
import WidthSpacer from "./WidthSpacer";

export default function Rating({ rating }) {
    return (
        <View style={resuable.rowWithSpace("flex-start")}>
            <MaterialCommunityIcons name="star" size={20} color={"#FD9422"} />
            <WidthSpacer width={5} />
            <ResuableText
                text={rating}
                size={16}
                color={"#FD9422"}
                fontFamily={"mBold"}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
