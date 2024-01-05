import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import HeightSpacer from "../Resuable/HeightSpacer";
import ResuableText from "../Resuable/ResuableText";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants/theme";
import resuable from "../Resuable/Resuable.style";
import { Feather } from "@expo/vector-icons";
import HotelsCard from "../Tiles/Hotels/HotelsCard";

export default function BestHotels() {
    const navigation = useNavigation();
    const bestHotels = [
        {
            _id: "101",
            name: "Luxury Oasis Resort",
            imageUrl: "https://source.unsplash.com/featured/?hotel,luxury",
            rating: 4.9,
            price: "$350/night",
            location: "Maldives",
            reviews: "1120 Reviews",
        },
        {
            _id: "102",
            name: "Elegant Plaza Hotel",
            imageUrl: "https://source.unsplash.com/featured/?hotel,elegant",
            rating: 4.8,
            price: "$250/night",
            location: "Paris, France",
            reviews: "240 Reviews",
        },
        {
            _id: "103",
            name: "Serenity Beachfront Inn",
            imageUrl: "https://source.unsplash.com/featured/?hotel,beachfront",
            rating: 4.7,
            price: "$180/night",
            location: "Bali, Indonesia",
            reviews: "1800 Reviews",
        },
        {
            _id: "104",
            name: "Grand Metropolitan Suites",
            imageUrl:
                "https://source.unsplash.com/featured/?hotel,metropolitan",
            rating: 4.6,
            price: "$300/night",
            location: "New York, USA",
            reviews: "1400 Reviews",
        },
        {
            _id: "105",
            name: "Panoramic Skyline Hotel",
            imageUrl: "https://source.unsplash.com/featured/?hotel,skyline",
            rating: 4.5,
            price: "$280/night",
            location: "Tokyo, Japan",
            reviews: "920 Reviews",
        },
        {
            _id: "106",
            name: "Rustic Mountain Retreat",
            imageUrl: "https://source.unsplash.com/featured/?hotel,mountain",
            rating: 4.4,
            price: "$200/night",
            location: "Swiss Alps",
            reviews: "650 Reviews",
        },
        {
            _id: "107",
            name: "Oceanview Paradise Resort",
            imageUrl: "https://source.unsplash.com/featured/?hotel,oceanview",
            rating: 4.8,
            price: "$400/night",
            location: "Phuket, Thailand",
            reviews: "2100 Reviews",
        },
        {
            _id: "108",
            name: "Historic Cityscape Hotel",
            imageUrl: "https://source.unsplash.com/featured/?hotel,cityscape",
            rating: 4.6,
            price: "$260/night",
            location: "Rome, Italy",
            reviews: "1200 Reviews",
        },
        {
            _id: "109",
            name: "Wilderness Safari Lodge",
            imageUrl: "https://source.unsplash.com/featured/?hotel,wilderness",
            rating: 4.7,
            price: "$320/night",
            location: "Serengeti, Tanzania",
            reviews: "1600 Reviews",
        },
        {
            _id: "110",
            name: "Sunset Cliffs Resort",
            imageUrl: "https://source.unsplash.com/featured/?hotel,sunset",
            rating: 4.9,
            price: "$380/night",
            location: "San Diego, USA",
            reviews: "1800 Reviews",
        },
    ];

    return (
        <View>
            <View style={[resuable.rowWithSpace()]}>
                <ResuableText
                    text="Nearby Hotels"
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
                data={bestHotels}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item._id.toString()}
                contentContainerStyle={{ columnGap: SIZES.small }}
                renderItem={({ item, index }) => (
                    <HotelsCard
                        item={item}
                        onPress={() =>
                            navigation.navigate("HotelsDetail", item._id)
                        }
                        margin={10}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
