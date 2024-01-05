import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function PlaceDetail() {
    const route = useRoute();
    const id = route.params;
    return (
        <View>
            <Text>PlaceDetail</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
