import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import {
    AppBar,
    HeightSpacer,
    ResuableText,
    SettingTile,
} from "../../components";

const Settings = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
            <View style={{ height: 120 }}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <ResuableText
                    textAlign="left"
                    size={SIZES.xLarge}
                    fontFamily={"mBold"}
                    color={COLORS.black}
                    text={"Account setting"}
                />
                <HeightSpacer height={10} />
                <SettingTile title={"Language"} />
                <HeightSpacer height={3} />
                <SettingTile title={"Country"} title1={"USA"} />
                <HeightSpacer height={40} />
                <ResuableText
                    textAlign="left"
                    size={SIZES.xLarge}
                    color={COLORS.black}
                    text={"Support"}
                    fontFamily={"mBold"}
                />
                <HeightSpacer height={3} />
                <SettingTile title={"Get Help"} title1={""} />
                <HeightSpacer height={3} />
                <SettingTile title={"Give a feedback"} title1={""} />
                <HeightSpacer height={40} />
                <ResuableText
                    textAlign="left"
                    size={SIZES.xLarge - 5}
                    color={COLORS.black}
                    fontFamily={"mBold"}
                    text={"Legal"}
                />
                <HeightSpacer height={3} />
                <SettingTile title={"Terms of service"} title1={""} />
                <HeightSpacer height={3} />
                <SettingTile title={"Privacy Policy"} title1={""} />
                <HeightSpacer height={40} />
            </View>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({});
