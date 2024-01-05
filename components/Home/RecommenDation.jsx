import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import resuable from "../Resuable/Resuable.style";
import ResuableText from "../Resuable/ResuableText";
import { Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import ResuableTile from "../Resuable/ResuableTile";

export default function RecommenDation() {
    const navigation = useNavigation();
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
        <View style={styles.container}>
            <View style={[resuable.rowWithSpace(), { paddingBottom: 4 }]}>
                <ResuableText
                    text="Recomendations"
                    size={SIZES.large}
                    color={COLORS.black}
                    fontWeight={"medium"}
                    fontFamily={"homeFont"}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Recommendated")}
                >
                    <Feather name="list" size={20} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={recommendations}
                keyExtractor={(item) => item._id.toString()}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <ResuableTile
                        item={item}
                        onPress={() => {
                            navigation.navigate("PlaceDetail", item._id);
                        }}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
});
