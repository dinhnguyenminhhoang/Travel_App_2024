import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
    CountryDetail,
    HotelList,
    HotelsDetail,
    HotelsSearch,
    OnBoarding,
    Payment,
    PlaceDetail,
    Recommendated,
    Search,
    SelectRoom,
    Settings,
} from "./screens";
import ButtonTabNavigation from "./navigation/ButtonTabNavigation";
import { useCallback } from "react";
const Stack = createNativeStackNavigator();
export default function App() {
    const [fontLoaded] = useFonts({
        homeFont: require("./assets/fonts/Homepage.otf"),
        mBold: require("./assets/fonts/Montserrat-Bold.ttf"),
        mRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
        bili: require("./assets/fonts/bily.ttf"),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontLoaded]);
    if (!fontLoaded) return null;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="onBoarding"
                    component={OnBoarding}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Bottom"
                    component={ButtonTabNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CountryDetail"
                    component={CountryDetail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Recommendated"
                    component={Recommendated}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PlaceDetail"
                    component={PlaceDetail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HotelsDetail"
                    component={HotelsDetail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HotelList"
                    component={HotelList}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HotelsSearch"
                    component={HotelsSearch}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SelectRoom"
                    component={SelectRoom}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Payment"
                    component={Payment}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontSize: 24,
        fontFamily: "homeFont",
    },
});
