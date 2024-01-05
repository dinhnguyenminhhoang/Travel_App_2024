import { Image, StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import HeightSpacer from "../Resuable/HeightSpacer";
import { SIZES } from "../../constants/theme";
import Country from "../Tiles/Country/Country";

export default function Places() {
    const countries = [
        {
            _id: 1,
            country: "Vietnam",
            description:
                "Vietnam, officially the Socialist Republic of Vietnam, is a country in Southeast Asia. Located at the eastern edge of mainland Southeast Asia, it covers 331,699 square kilometers.",
            imageUrl:
                "https://i.pinimg.com/564x/87/9a/a0/879aa0d98eab8913cdab628e0ba35be7.jpg",
            region: "Asia",
        },
        {
            _id: 2,
            country: "United States",
            description:
                "The United States of America (USA), commonly known as the United States (US), is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and some minor possessions.",
            imageUrl:
                "https://i.pinimg.com/736x/41/c7/ff/41c7ff9610af3dadb4df711d78733718.jpg",
            region: "North America",
        },
        {
            _id: 3,
            country: "Germany",
            description:
                "Germany, officially the Federal Republic of Germany, is a country at the intersection of Central and Western Europe. It is situated between the Baltic and North seas to the north and the Alps to the south.",
            imageUrl:
                "https://i.pinimg.com/564x/44/4a/b5/444ab57836312b637c5f5a7c0acf8bcd.jpg",
            region: "Europe",
        },
        {
            _id: 4,
            country: "Brazil",
            description:
                "Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America. It covers an area of 8,515,767 square kilometers and has a population of over 211 million people.",
            imageUrl:
                "https://i.pinimg.com/564x/7e/29/cd/7e29cd28b58d6986559bbd0af6b9adb2.jpg",
            region: "South America",
        },
        {
            _id: 5,
            country: "Australia",
            description:
                "Australia, officially known as the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.",
            imageUrl:
                "https://i.pinimg.com/564x/a2/d6/39/a2d639e2c08cd49f7aba4ede1c435c06.jpg",
            region: "Oceania",
        },
        {
            _id: 6,
            country: "South Africa",
            description:
                "South Africa, officially known as the Republic of South Africa, is the southernmost country in Africa. It is bounded to the south by 2,798 kilometers of coastline of Southern Africa.",
            imageUrl:
                "https://i.pinimg.com/564x/2e/c0/77/2ec0773a1fcd847a5bd258ea4bba668e.jpg",
            region: "Africa",
        },
        {
            _id: 7,
            country: "Japan",
            description:
                "Japan, officially the State of Japan, is an island country in East Asia. It is situated in the Pacific Ocean, off the eastern coast of the Asian continent.",
            imageUrl:
                "https://i.pinimg.com/736x/7f/2d/96/7f2d96104ffadeaaef28267d686d0459.jpg",
            region: "Asia",
        },
        {
            _id: 8,
            country: "India",
            description:
                "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world.",
            imageUrl:
                "https://i.pinimg.com/736x/4e/e2/1c/4ee21c1296822c29ca9a6de19384c36b.jpg",
            region: "Asia",
        },
        {
            _id: 9,
            country: "Canada",
            description:
                "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometers.",
            imageUrl:
                "https://i.pinimg.com/564x/59/a1/86/59a18673dd27744b13ac8199419ff0fe.jpg",
            region: "North America",
        },
        {
            _id: 10,
            country: "New Zealand",
            description:
                "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses, the North Island and the South Island, and around 600 smaller islands.",
            imageUrl:
                "https://i.pinimg.com/736x/0e/f7/63/0ef763379b64ef88f565d1b5a489a5d2.jpg",
            region: "Oceania",
        },
    ];

    return (
        <View>
            <HeightSpacer height={20} />
            <VirtualizedList
                data={countries}
                horizontal
                keyExtractor={(item) => item._id.toString()}
                showsHorizontalScrollIndicator={false}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: SIZES.medium }}>
                        <Country item={item} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
