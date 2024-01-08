import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import resuable from "../../components/Resuable/Resuable.style";
import {
    BestHotels,
    HeightSpacer,
    Places,
    RecommenDation,
    ResuableText,
} from "../../components";
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
                <HeightSpacer height={8} />
                <ResuableText
                    text="Places"
                    size={SIZES.large}
                    color={COLORS.black}
                    fontWeight={"medium"}
                    fontFamily={"homeFont"}
                    textAlign="left"
                />
                <Places />
                <RecommenDation />
                <HeightSpacer height={20} />
                <BestHotels />
            </View>
        </SafeAreaView>
    );
}
