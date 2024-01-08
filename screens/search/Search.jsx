import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import resuable from "../../components/Resuable/Resuable.style";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { HeightSpacer, ResuableTile } from "../../components";

export default function Search({ navigation }) {
    const [searchKey, setSearchKey] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const search = [
        {
            _id: "1",
            country_id: "US",
            title: "Sunny Beach Resort",
            location: "Florida",
            imageUrl: "https://source.unsplash.com/featured/?beach,resort",
            rating: "4.7",
            review: "1120 Reviews",
        },
        {
            _id: "2",
            country_id: "FR",
            title: "Eiffel Tower Experience",
            location: "Paris",
            imageUrl: "https://source.unsplash.com/featured/?eiffel,tower",
            rating: "4.5",
            review: "240 Reviews",
        },
        {
            _id: "3",
            country_id: "JP",
            title: "Traditional Tea Ceremony",
            location: "Tokyo",
            imageUrl: "https://source.unsplash.com/featured/?tea,ceremony",
            rating: "4.8",
            review: "2601 Reviews",
        },
        {
            _id: "4",
            country_id: "IT",
            title: "Artistic Venetian Canals",
            location: "Venice",
            imageUrl: "https://source.unsplash.com/featured/?venetian,canals",
            rating: "4.6",
            review: "860 Reviews",
        },
        {
            _id: "5",
            country_id: "AU",
            title: "Great Barrier Reef Adventure",
            location: "Queensland",
            imageUrl:
                "https://source.unsplash.com/featured/?great,barrier,reef",
            rating: "4.9",
            review: "2802 Reviews",
        },
        // Thêm dữ liệu cho các search items khác nếu cần
    ];

    return (
        <SafeAreaView style={[resuable.container, resuable.safeView]}>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.input}
                        value={searchKey}
                        onChange={setSearchKey}
                        placeholder="Where fo you want to visit ?"
                    />
                </View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather name="search" size={24} color={COLORS.white} />
                </TouchableOpacity>
            </View>
            {search.length === 0 ? (
                <View>
                    <HeightSpacer height={"30%"} />
                    <Image
                        style={styles.searchImg}
                        source={require("../../assets/images/searchEmpaty.jpg")}
                    />
                </View>
            ) : (
                <FlatList
                    data={search}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.title}>
                            <ResuableTile
                                item={item}
                                onPress={() =>
                                    navigation.navigate("PlaceDetail", item._id)
                                }
                            />
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
}
