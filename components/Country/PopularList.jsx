import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ResuableTile from "../Resuable/ResuableTile";
import { useNavigation } from "@react-navigation/native";

export default function PopularList({ data }) {
    const natigation = useNavigation();
    const renderItem = ({ item }) => (
        <View style={{ marginBottom: 10 }}>
            <ResuableTile
                item={item}
                onPress={() => natigation.navigate("PlaceDetail", item._id)}
            />
        </View>
    );
    return (
        <FlatList
            data={data}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id.toString()}
            renderItem={renderItem}
        />
    );
}
