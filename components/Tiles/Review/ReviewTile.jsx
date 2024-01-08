import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./Review.style";
import resuable from "../../Resuable/Resuable.style";
import NetWorkinImage from "../../Resuable/NetWorkinImage";
import WidthSpacer from "../../Resuable/WidthSpacer";
import ResuableText from "../../Resuable/ResuableText";
import { COLORS, TEXT } from "../../../constants/theme";
import Rating from "../../Resuable/Rating";
import DescriptionText from "../../Resuable/DescriptionText";

const ReviewTile = ({ review }) => {
    return (
        <View style={styles.reviewBorder}>
            <View style={resuable.rowWithSpace()}>
                <View style={resuable.rowWithSpace("flex-start")}>
                    <NetWorkinImage
                        source={review.user.profile}
                        width={54}
                        height={54}
                        radiusButtonIOS={10}
                    />
                    <WidthSpacer width={20} />
                    <View style={{ width: "80%" }}>
                        <View style={resuable.rowWithSpace()}>
                            <ResuableText
                                text={review.user.userName}
                                size={TEXT.small + 2}
                                color={COLORS.black}
                                fontFamily={"mRegular"}
                            />
                            <WidthSpacer width={30} />
                            <View style={resuable.rowWithSpace()}>
                                <Rating rating={review.rating} />
                                <WidthSpacer width={10} />
                                <ResuableText
                                    text={review.updatedAt}
                                    size={TEXT.small + 2}
                                    color={COLORS.black}
                                    fontFamily={"mRegular"}
                                />
                            </View>
                        </View>
                        <DescriptionText lines={3} text={review.review} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ReviewTile;
