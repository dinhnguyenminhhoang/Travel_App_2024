import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import {
    AppBar,
    DescriptionText,
    HeightSpacer,
    NetWorkinImage,
    PopularList,
    ResuableBtn,
    ResuableText,
} from "../../components";
import resuable from "../../components/Resuable/Resuable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
export default function PlaceDetail({ navigation }) {
    const route = useRoute();
    const id = route.params;
    const place = {
        _id: "802",
        country_id: "8",
        title: "Grand Canyon National Park",
        contact_Id: "102",
        description:
            "Grand Canyon National Park is a UNESCO World Heritage Site located in Arizona, USA. It is renowned for its breathtaking views, deep canyons, and vibrant rock formations. Visitors can explore the South Rim and North Rim, hike along the rim trails, or take a helicopter tour for a unique perspective. The Grand Canyon offers a variety of outdoor activities, including camping, river rafting, and stargazing. With its awe-inspiring landscapes, the Grand Canyon is a must-visit destination for nature enthusiasts and adventurers.",
        imageUrl:
            "https://source.unsplash.com/featured/?grand,canyon,national,park",
        rating: "4.9",
        review: "1500 Reviews",
        location: "Paris, France",
        latitude: 36.106965,
        longitude: -112.112997,
        popular: [
            {
                _id: "8021",
                title: "South Rim Trail",
                imageUrl:
                    "https://source.unsplash.com/featured/?grand,canyon,south,rim",
                rating: 4.8,
                review: "720 Reviews",
                location: "South Rim",
            },
            {
                _id: "8022",
                title: "North Rim Point",
                imageUrl:
                    "https://source.unsplash.com/featured/?grand,canyon,north,rim",
                rating: 4.7,
                review: "410 Reviews",
                location: "North Rim",
            },
            {
                _id: "8023",
                title: "Havasu Falls",
                imageUrl: "https://source.unsplash.com/featured/?havasu,falls",
                rating: 4.9,
                review: "370 Reviews",
                location: "Supai, Arizona",
            },
        ],
    };

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <View>
                    <NetWorkinImage
                        source={place.imageUrl}
                        height={250}
                        width={"100"}
                        radiusButtonIOS={30}
                    />
                    <AppBar
                        title={place.title}
                        color={COLORS.white}
                        icon={"search1"}
                        color1={COLORS.white}
                        onPress={() => navigation.goBack()}
                        onPress1={() => {}}
                        top={40}
                        right={20}
                        left={20}
                    />
                </View>

                <View style={styles.description}>
                    <View style={{ alignItems: "center" }}>
                        <ResuableText
                            text={place.location}
                            size={TEXT.xLarge}
                            color={COLORS.black}
                            fontFamily={"mRegular"}
                        />
                        <DescriptionText lines={14} text={place.description} />
                    </View>
                    <View style={{ alignContent: "center" }}>
                        <HeightSpacer height={20} />

                        <View style={resuable.rowWithSpace()}>
                            <ResuableText
                                text={"Popular Hotels"}
                                size={TEXT.large}
                                color={COLORS.black}
                                fontFamily={"mBold"}
                            />
                            <TouchableOpacity onPress={() => {}}>
                                <Feather name="list" size={20} />
                            </TouchableOpacity>
                        </View>
                        <HeightSpacer height={20} />
                        <PopularList data={place.popular} />
                        <ResuableBtn
                            onPress={() =>
                                navigation.navigate("HotelSearch", place._id)
                            }
                            text={"Find Best Hotels"}
                            width={SIZES.width - 40}
                            bgColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWidth={0}
                            textColor={COLORS.white}
                        />
                        <HeightSpacer height={50} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f3f4f8",
    },
    description: {
        marginHorizontal: 20,
        paddingTop: 20,
    },
});
