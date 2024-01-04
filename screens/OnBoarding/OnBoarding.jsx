import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slide } from "../../components";

export default function OnBoarding() {
    const slides = [
        {
            id: 1,
            image: require("../../assets/images/1.jpg"),
            title: "Find the perfect place to stay",
        },
        {
            id: 2,
            image: require("../../assets/images/2.jpg"),
            title: "Discover the world",
        },
        {
            id: 3,
            image: require("../../assets/images/3.jpg"),
            title: "Discover the best hotels in the world",
        },
    ];
    return (
        <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(slide) => <Slide item={slide.item} />}
        />
    );
}

const styles = StyleSheet.create({});
