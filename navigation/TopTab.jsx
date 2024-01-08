import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import {
    AppBar,
    HeightSpacer,
    NetWorkinImage,
    ResuableText,
} from "../components";
import { COLORS, SIZES } from "../constants/theme";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import styles from "./toptab.style";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: COLORS.lightWhite }}>
                <View>
                    <NetWorkinImage
                        source={
                            "https://i.pinimg.com/564x/ad/2c/1c/ad2c1c4bebc2d5871e66d5409a35cf84.jpg"
                        }
                        width={"100%"}
                        height={300}
                        radiusButtonIOS={0}
                    />
                    <AppBar
                        top={40}
                        left={20}
                        right={20}
                        color={COLORS.white}
                        color1={COLORS.white}
                        icon={"logout"}
                        onPress={() => navigation.goBack()}
                        onPress1={() => {}}
                    />
                    <View style={styles.profile}>
                        <Image
                            source={{
                                uri: "https://i.pinimg.com/736x/bd/e4/08/bde408ff6333475ec066860176935ac2.jpg",
                            }}
                            style={styles.image}
                        />
                        <HeightSpacer height={5} />
                        <View style={styles.name}>
                            <View style={{ alignItems: "center" }}>
                                <ResuableText
                                    text={"Đinh Nguyễn Minh Hoàng"}
                                    fontFamily={"homeFont"}
                                    size={SIZES.large}
                                    color={COLORS.black}
                                />
                            </View>
                        </View>
                        <HeightSpacer height={5} />
                        <View style={{ alignItems: "center" }}>
                            <ResuableText
                                text={"hoangdevfe@gmail.com"}
                                fontFamily={"mBold"}
                                size={SIZES.medium}
                                color={COLORS.lightWhite}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Bookings" component={TopBookings} />
                <Tab.Screen name="Trips" component={TopTrips} />
                <Tab.Screen name="Info" component={TopInfo} />
            </Tab.Navigator>
        </View>
    );
};

export default TopTab;
