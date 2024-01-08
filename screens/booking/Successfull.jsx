import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
    AssetImage,
    HeightSpacer,
    ResuableBtn,
    ResuableText,
    ResuableTile,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import resuable from "../../components/Resuable/Resuable.style";
import { useNavigation } from "@react-navigation/native";

const Successfull = () => {
    const navigation = useNavigation();
    const hotel = {
        _id: "102",
        name: "Elegant Plaza Hotel",
        imageUrl: "https://source.unsplash.com/featured/?hotel,elegant",
        rating: 4.8,
        price: "$250/night",
        location: "Paris, France",
        review: "240 Reviews",
    };
    return (
        <View>
            <View style={{ marginTop: "40%" }}>
                <AssetImage
                    source={require("../../assets/images/checked-success.png")}
                    width={"100%"}
                    height={200}
                />
                <HeightSpacer height={40} />
                <View style={{ alignItems: "center" }}>
                    <ResuableText
                        text={"Booking Succesful"}
                        size={TEXT.xLarge}
                        color={COLORS.black}
                        fontFamily={"mBold"}
                    />
                    <HeightSpacer height={20} />
                    <ResuableText
                        text={"You can find your bookings details below"}
                        size={TEXT.medium}
                        color={COLORS.gray}
                        fontFamily={"mRegular"}
                    />
                    <HeightSpacer height={20} />
                </View>
                <View style={{ padding: 20 }}>
                    <ResuableText
                        text={"Room Details"}
                        size={TEXT.medium}
                        color={COLORS.dark}
                        fontFamily={"mBold"}
                        textAlign="left"
                    />
                    <HeightSpacer height={20} />
                    <ResuableTile item={hotel} />
                    <HeightSpacer height={40} />
                    <ResuableBtn
                        onPress={() => navigation.navigate("Bottom")}
                        text={"Done"}
                        width={SIZES.width - 50}
                        bgColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                </View>
            </View>
        </View>
    );
};

export default Successfull;

const styles = StyleSheet.create({});
