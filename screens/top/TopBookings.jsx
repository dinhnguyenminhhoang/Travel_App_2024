import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HotelsCard, ResuableTile } from "../../components";
import { COLORS } from "../../constants/theme";
import resuable from "../../components/Resuable/Resuable.style";

const TopBookings = () => {
    const hotelsBooking = [
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
    ];
    return (
        <View style={{ margin: 20, paddingBottom: 100 }}>
            <FlatList
                data={hotelsBooking}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: COLORS.lightWhite,
                            marginBottom: 10,
                        }}
                    >
                        <ResuableTile
                            margin={5}
                            item={item}
                            onPress={() => {}}
                        />
                        <View style={resuable.rowWithSpace()}></View>
                    </View>
                )}
            />
        </View>
    );
};

export default TopBookings;

const styles = StyleSheet.create({});
