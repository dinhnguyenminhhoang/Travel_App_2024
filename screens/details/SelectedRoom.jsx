import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
    AppBar,
    AssetImage,
    Counter,
    HeightSpacer,
    NetWorkinImage,
    Rating,
    ResuableBtn,
    ResuableText,
    WidthSpacer,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import resuable from "../../components/Resuable/Resuable.style";

const SelectedRoom = ({ navigation }) => {
    const router = useRoute();
    const item = router.params;
    return (
        <View>
            <View style={{ height: 100 }}>
                <AppBar
                    top={50}
                    right={20}
                    left={20}
                    title={item.title}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                    color1={"transparent"}
                />
            </View>
            <View
                style={{
                    backgroundColor: COLORS.lightWhite,
                    borderRadius: 16,
                    marginHorizontal: 10,
                }}
            >
                <View>
                    <NetWorkinImage
                        source={item.imageUrl}
                        width={"100%"}
                        height={200}
                        radiusButtonIOS={16}
                    />
                    <HeightSpacer height={20} />
                    <View style={{ marginHorizontal: 10 }}>
                        <View style={resuable.rowWithSpace()}>
                            <ResuableText
                                text={item.title}
                                size={SIZES.medium}
                                color={COLORS.black}
                                fontFamily={"mBold"}
                            />
                            <View style={resuable.rowWithSpace("flex-start")}>
                                <Rating rating={item.rating} />
                                <WidthSpacer width={10} />
                                <ResuableText
                                    text={`(${item.review})`}
                                    size={SIZES.medium}
                                    color={COLORS.gray}
                                />
                            </View>
                        </View>
                        <HeightSpacer height={10} />
                        <ResuableText
                            text={item.location}
                            size={SIZES.medium}
                            color={COLORS.gray}
                            textAlign="left"
                        />
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: COLORS.lightGray,
                                marginVertical: 15,
                            }}
                        ></View>
                        <ResuableText
                            text={"Room Requirements"}
                            size={SIZES.medium}
                            color={COLORS.gray}
                            textAlign="left"
                        />
                        <HeightSpacer height={30} />
                        <View style={resuable.rowWithSpace()}>
                            <ResuableText
                                text={"Price per night"}
                                size={SIZES.medium}
                                color={COLORS.gray}
                                textAlign="left"
                            />
                            <ResuableText
                                text={"$400"}
                                size={SIZES.medium}
                                color={COLORS.gray}
                                textAlign="left"
                            />
                        </View>
                        <HeightSpacer height={15} />
                        <View style={resuable.rowWithSpace()}>
                            <ResuableText
                                text={"Payment"}
                                size={SIZES.medium}
                                color={COLORS.gray}
                                textAlign="left"
                            />
                            <View style={resuable.rowWithSpace("flex-start")}>
                                <AssetImage
                                    mode={"contain"}
                                    width={30}
                                    height={20}
                                    source={require("../../assets//images/visa.jpg")}
                                />
                                <ResuableText
                                    text={"VISA"}
                                    size={SIZES.medium}
                                    color={COLORS.gray}
                                    textAlign="left"
                                />
                            </View>
                        </View>
                        <HeightSpacer height={15} />

                        <View style={resuable.rowWithSpace()}>
                            <ResuableText
                                text={"4 Guests"}
                                size={SIZES.medium}
                                color={COLORS.gray}
                                textAlign="left"
                            />

                            <Counter />
                        </View>
                        <HeightSpacer height={30} />
                        <ResuableBtn
                            onPress={() =>
                                navigation.navigate("Successfull", item)
                            }
                            text={"Book now"}
                            width={SIZES.width - 40}
                            bgColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWidth={0}
                            textColor={COLORS.white}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SelectedRoom;

const styles = StyleSheet.create({});
