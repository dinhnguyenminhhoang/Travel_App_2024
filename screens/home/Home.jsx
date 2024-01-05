import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import resuable from "../../components/Resuable/Resuable.style";
import { HeightSpacer, Places, ResuableText } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.styles";
export default function Home({ navigation }) {
    return (
        <SafeAreaView style={resuable.container}>
            <View>
                <View style={resuable.rowWithSpace()}>
                    <ResuableText
                        text="Hey user!"
                        size={SIZES.large}
                        color={COLORS.black}
                        fontWeight={"bold"}
                    />
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => navigation.navigate("Search")}
                    >
                        <AntDesign name="search1" size={26} />
                    </TouchableOpacity>
                </View>
                <HeightSpacer height={SIZES.xLarge} />
                <ResuableText
                    text="Places"
                    size={SIZES.large}
                    color={COLORS.black}
                    fontWeight={"medium"}
                    fontFamily={"homeFont"}
                />
                <Places />
            </View>
        </SafeAreaView>
    );
}
