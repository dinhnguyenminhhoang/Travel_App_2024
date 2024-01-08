import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { AppBar, HeightSpacer, HotelsCard } from "../../components";
import resuable from "../../components/Resuable/Resuable.style";
import { COLORS } from "../../constants/theme";
import styles from "./search.style";

const HotelsSearch = ({ navigation }) => {
    const [searchKey, setSearchKey] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const search = [
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
        <SafeAreaView style={[resuable.container, resuable.safeView]}>
            <View style={{ height: 90 }}>
                <AppBar
                    top={50}
                    right={20}
                    left={20}
                    title={"looking for hotel"}
                    color={COLORS.white}
                    icon={"filter"}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => {}}
                />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.input}
                        value={searchKey}
                        onChange={setSearchKey}
                        placeholder="Where do you want to visit ?"
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
                    numColumns={2}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 16 }}></View>
                    )}
                    renderItem={({ item }) => (
                        <HotelsCard
                            margin={0}
                            item={item}
                            onPress={() =>
                                navigation.navigate("HotelsDetail", item._id)
                            }
                        />
                    )}
                />
            )}
        </SafeAreaView>
    );
};

export default HotelsSearch;
