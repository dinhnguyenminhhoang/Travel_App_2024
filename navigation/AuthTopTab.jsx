import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registion, Singnin } from "../screens";
import { COLORS } from "../constants/theme";
import { AssetImage, HeightSpacer } from "../components";

const Tab = createMaterialTopTabNavigator();
const AuthTopTab = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <HeightSpacer height={80} />
                <AssetImage
                    mode={"contain"}
                    width={"100%"}
                    height={250}
                    source={require("../assets/images/thubm.jpg")}
                />
                <View style={{ height: 600 }}>
                    <Tab.Navigator>
                        <Tab.Screen component={Singnin} name="Singnin" />
                        <Tab.Screen component={Registion} name="Registion" />
                    </Tab.Navigator>
                </View>
            </ScrollView>
        </View>
    );
};

export default AuthTopTab;

const styles = StyleSheet.create({});
