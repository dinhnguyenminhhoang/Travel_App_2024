import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat, Home, Location, Profile } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import TopTab from "./TopTab";
const Tab = createBottomTabNavigator();
const tabBarStyles = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
};
export default function ButtonTabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#eb6a58"
            keyboardHidesTabBar={true}
            headerShown={false}
            inactiveColor="#3e2465"
            barStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarStyle: tabBarStyles,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "grid" : "grid-outline"}
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Location"
                component={Location}
                options={{
                    tabBarStyle: tabBarStyles,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "location" : "location-outline"}
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarStyle: tabBarStyles,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "chatbubble-ellipses"
                                    : "chatbubble-ellipses-outline"
                            }
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={TopTab}
                options={{
                    tabBarStyle: tabBarStyles,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            color={focused ? COLORS.red : COLORS.gray}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});
