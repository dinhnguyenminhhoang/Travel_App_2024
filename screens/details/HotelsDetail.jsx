import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { Rating } from "react-native-stock-star-rating";
import {
    AppBar,
    DescriptionText,
    HeightSpacer,
    HoteMap,
    NetWorkinImage,
    ResuableBtn,
    ResuableText,
    ReviewList,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import resuable from "../../components/Resuable/Resuable.style";
import styles from "./HotelDetail.style";
import { Feather } from "@expo/vector-icons";
const HotelsDetail = ({ navigation }) => {
    const hotel = {
        availability: {
            start: "2023-01-01",
            end: "2023-01-07",
        },
        _id: "901",
        country_id: "9",
        title: "Luxury Resort & Spa",
        description:
            "Experience the ultimate luxury at our 5-star resort and spa. Nestled in a tropical paradise, our resort offers breathtaking ocean views, world-class amenities, and impeccable service. Indulge in spa treatments, savor gourmet cuisine, and relax in elegantly appointed rooms with stunning vistas. Whether you're seeking a romantic getaway or a family vacation, our resort provides an unforgettable experience.",
        contact: "reservations@luxuryresort.com",
        imageUrl: "https://source.unsplash.com/featured/?luxury,resort,spa",
        rating: "4.5",
        review: "1200 Reviews",
        reviews: [
            {
                _id: "1",
                review: "Great experience! The place was amazing.",
                rating: "5",
                user: {
                    _id: "user1",
                    userName: "john_doe",
                    profile: "https://source.unsplash.com/featured/?portrait",
                },
                updatedAt: "20/10/2023",
            },
            {
                _id: "2",
                review: "Nice place, but could be better.",
                rating: "3",
                user: {
                    _id: "user2",
                    userName: "jane_smith",
                    profile: "https://source.unsplash.com/featured/?portrait",
                },
                updatedAt: "20/11/2023",
            },
        ],

        location: "Paradise Island",
        latitude: 25.08897,
        longitude: -77.31879,
        price: "$500 per night",
        facilities: [
            {
                wifi: true,
                _id: "9011",
            },
        ],
        coordinates: {
            latitude: 25.08897,
            longitude: -77.31879,
        },
        __v: 0,
    };
    let coordinates = {
        id: hotel._id,
        title: hotel.title,
        latitude: hotel.coordinates.latitude,
        longitude: hotel.coordinates.longitude,
        latitudelta: 0.01,
        longitudelta: 0.01,
    };
    return (
        <ScrollView>
            <View style={{ height: 80 }}>
                <AppBar
                    top={50}
                    right={20}
                    left={20}
                    title={hotel.title}
                    color={COLORS.white}
                    icon={"search1"}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate("HotelsSearch")}
                />
            </View>
            <View>
                <View style={styles.container}>
                    <NetWorkinImage
                        source={hotel.imageUrl}
                        width={"100%"}
                        height={220}
                        radiusButtonIOS={25}
                    />

                    <View style={styles.titleContainer}>
                        <View style={styles.titleColum}>
                            <ResuableText
                                text={hotel.title}
                                size={TEXT.xLarge}
                                color={COLORS.black}
                                fontFamily={"mRegular"}
                                textAlign="left"
                            />
                            <HeightSpacer height={10} />
                            <ResuableText
                                text={hotel.location}
                                size={TEXT.medium}
                                color={COLORS.black}
                                fontFamily={"mRegular"}
                                textAlign="left"
                            />
                            <HeightSpacer height={15} />
                            <View style={resuable.rowWithSpace("")}>
                                <Rating
                                    maxStars={5}
                                    stars={hotel.rating}
                                    bordered={false}
                                    color={"#fd9942"}
                                />
                                <ResuableText
                                    text={`(${hotel.review})`}
                                    size={TEXT.medium}
                                    color={COLORS.gray}
                                    fontFamily={"mRegular"}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.container, { paddingTop: 60 }]}>
                    <ResuableText
                        text={"Description"}
                        size={TEXT.large}
                        color={COLORS.black}
                        fontFamily={"mRegular"}
                        textAlign="left"
                    />
                    <HeightSpacer height={10} />
                    <DescriptionText text={hotel.description} />
                    <HeightSpacer height={10} />
                    <ResuableText
                        text={"Location"}
                        size={TEXT.large}
                        color={COLORS.black}
                        fontFamily={"mRegular"}
                        textAlign="left"
                    />
                    <HeightSpacer height={15} />
                    <ResuableText
                        text={hotel.location}
                        size={TEXT.small + 2}
                        color={COLORS.gray}
                        fontFamily={"mBold"}
                        textAlign="left"
                    />
                    <HoteMap coordinates={coordinates} />
                    <View style={resuable.rowWithSpace()}>
                        <ResuableText
                            text={`Reviews`}
                            size={TEXT.large}
                            color={COLORS.gray}
                            fontFamily={"mBold"}
                            textAlign="left"
                        />
                        <TouchableOpacity>
                            <Feather name="list" size={20} />
                        </TouchableOpacity>
                    </View>
                    <HeightSpacer height={10} />
                    <ReviewList reviews={hotel.reviews} />
                </View>

                <View style={[resuable.rowWithSpace(), styles.bottom]}>
                    <View>
                        <ResuableText
                            text={`${hotel.price}`}
                            size={TEXT.large}
                            color={COLORS.black}
                            fontFamily={"mBold"}
                            textAlign="left"
                        />
                        <HeightSpacer />
                        <ResuableText
                            text={`Jan 01 -Dec 25`}
                            size={TEXT.medium}
                            color={COLORS.gray}
                            fontFamily={"mRegular"}
                            textAlign="left"
                        />
                    </View>
                    <ResuableBtn
                        onPress={() =>
                            navigation.navigate("SelectRoom", hotel._id)
                        }
                        text={"Select Room"}
                        width={(SIZES.width - 50) / 2.2}
                        bgColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default HotelsDetail;
