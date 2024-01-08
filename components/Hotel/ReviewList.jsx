import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReviewTile from "../Tiles/Review/ReviewTile";

const ReviewList = ({ reviews }) => {
    return (
        <FlatList
            data={reviews}
            keyExtractor={(item) => item._id}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={{ marginBottom: 10 }}>
                    <ReviewTile review={item} />
                </View>
            )}
        />
    );
};

export default ReviewList;

const styles = StyleSheet.create({});
