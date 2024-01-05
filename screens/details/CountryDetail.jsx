import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CountryDetail({ navigation }) {
    const route = useRoute();
    const { item } = route.params;
    console.log(item);
    return (
        <View>
            <Text>CountryDetail</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
