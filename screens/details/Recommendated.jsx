import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import resuable from "../../components/Resuable/Resuable.style";
import { AppBar, ResuableTile } from "../../components";
import { COLORS } from "../../constants/theme";

export default function Recommendated({ navigation }) {
    const recommendations = [
        {
            _id: "1",
            country_id: "US",
            title: "Sunny Beach Resort",
            imageUrl: "https://source.unsplash.com/featured/?beach,resort",
            rating: 4.7,
            review: "1120 Reviews",
            location: "California, United States",
        },
        {
            _id: "2",
            country_id: "FR",
            title: "Eiffel Tower Experience",
            imageUrl: "https://source.unsplash.com/featured/?eiffel,tower",
            rating: 4.5,
            review: "240 Reviews",
            location: "Paris, France",
        },
        {
            _id: "3",
            country_id: "JP",
            title: "Traditional Tea Ceremony",
            imageUrl: "https://source.unsplash.com/featured/?tea,ceremony",
            rating: 4.8,
            review: "2601 Reviews",
            location: "Kyoto, Japan",
        },
        {
            _id: "4",
            country_id: "IT",
            title: "Artistic Venetian Canals",
            imageUrl: "https://source.unsplash.com/featured/?venetian,canals",
            rating: 4.6,
            review: "860 Reviews",
            location: "Venice, Italy",
        },
        {
            _id: "5",
            country_id: "AU",
            title: "Great Barrier Reef Adventure",
            imageUrl:
                "https://source.unsplash.com/featured/?great,barrier,reef",
            rating: 4.9,
            review: "2802 Reviews",
            location: "Queensland, Australia",
        },
        {
            _id: "6",
            country_id: "CA",
            title: "Northern Lights Expedition",
            imageUrl: "https://source.unsplash.com/featured/?northern,lights",
            rating: 4.7,
            review: "802 Reviews",
            location: "Yellowknife, Canada",
        },
        {
            _id: "7",
            country_id: "BR",
            title: "Amazon Rainforest Trek",
            imageUrl: "https://source.unsplash.com/featured/?amazon,rainforest",
            rating: 4.4,
            review: "1609 Reviews",
            location: "Manaus, Brazil",
        },
        {
            _id: "8",
            country_id: "EG",
            title: "Pyramids of Giza Tour",
            imageUrl: "https://source.unsplash.com/featured/?pyramids,giza",
            rating: 4.6,
            review: "765 Reviews",
            location: "Giza, Egypt",
        },
        {
            _id: "9",
            country_id: "NZ",
            title: "Fiordland National Park Exploration",
            imageUrl:
                "https://source.unsplash.com/featured/?fiordland,national,park",
            rating: 4.8,
            review: "379 Reviews",
            location: "South Island, New Zealand",
        },
        {
            _id: "10",
            country_id: "TH",
            title: "Thai Cooking Class",
            imageUrl:
                "https://source.unsplash.com/featured/?thai,cooking,class",
            rating: 4.5,
            review: "862 Reviews",
            location: "Bangkok, Thailand",
        },
    ];

    return (
        <SafeAreaView style={[resuable.safeView, { marginHorizontal: 20 }]}>
            <View style={{ height: 50 }}>
                <AppBar
                    title={"Recommendation"}
                    color={COLORS.white}
                    icon={"search1"}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate("Search")}
                />
            </View>
            <View style={{ paddingTop: 20 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={recommendations}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 10 }}>
                            <ResuableTile
                                item={item}
                                onPress={() =>
                                    navigation.navigate("PlaceDetail", item._id)
                                }
                            />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
