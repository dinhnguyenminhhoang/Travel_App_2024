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

export default function CountryDetail({ navigation }) {
    const route = useRoute();
    const item = route.params;
    const country = {
        _id: "8",
        country: "USA",
        description:
            "The United States of America (USA) is a vast and diverse country that spans from the Atlantic Ocean to the Pacific Ocean. It is known for its rich history, cultural diversity, and iconic landmarks. From the bustling streets of New York City to the breathtaking landscapes of the Grand Canyon and Yellowstone National Park, the USA offers a wide range of experiences for travelers. Whether you're interested in exploring vibrant cities, relaxing on beautiful beaches, or immersing yourself in the beauty of nature, the USA has something for everyone. With a variety of climates and regions, each state in the USA has its own unique charm and attractions. Plan your journey to discover the wonders of the United States and create lasting memories.",
        imageUrl: "https://source.unsplash.com/featured/?usa",
        popular: [
            {
                _id: "801",
                title: "New York City",
                imageUrl: "https://source.unsplash.com/featured/?new,york,city",
                rating: 4.8,
                review: "1200 Reviews",
                location: "New York, New York",
            },
            {
                _id: "802",
                title: "Grand Canyon National Park",
                imageUrl:
                    "https://source.unsplash.com/featured/?grand,canyon,national,park",
                rating: 4.9,
                review: "1500 Reviews",
                location: "Arizona",
            },
            {
                _id: "803",
                title: "Yellowstone National Park",
                imageUrl:
                    "https://source.unsplash.com/featured/?yellowstone,national,park",
                rating: 4.7,
                review: "1800 Reviews",
                location: "Wyoming, Montana, Idaho",
            },
        ],
        region: "North America",
    };

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <View>
                    <NetWorkinImage
                        source={country.imageUrl}
                        height={250}
                        width={"100"}
                        radiusButtonIOS={30}
                    />
                    <AppBar
                        title={country.country}
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
                            text={country.region}
                            size={TEXT.xLarge}
                            color={COLORS.black}
                            fontFamily={"mRegular"}
                        />
                        <DescriptionText
                            lines={14}
                            text={country.description}
                        />
                    </View>
                    <View style={{ alignContent: "center" }}>
                        <HeightSpacer height={20} />

                        <View style={resuable.rowWithSpace()}>
                            <ResuableText
                                text={"Popular Destinations"}
                                size={TEXT.large}
                                color={COLORS.black}
                                fontFamily={"mBold"}
                            />
                            <TouchableOpacity onPress={() => {}}>
                                <Feather name="list" size={20} />
                            </TouchableOpacity>
                        </View>
                        <HeightSpacer height={20} />
                        <PopularList data={country.popular} />
                        <ResuableBtn
                            onPress={() =>
                                navigation.navigate("HotelSearch", country._id)
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
