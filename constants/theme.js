import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const COLORS = {
    blue: "#4267B2",
    red: "#EB6A58",
    green: "#449282",
    white: "#fbfbfb",
    lightWhite: "#fff",
    lightBlue: "#6b85c1",
    lightRed: "#eb9c9b",
    lightGreen: "#73ada1",
    black: "#121212",
    dark: "#3d3a45",
    gray: "#8c8896",
    lightGray: "#d1cfd5",
};
const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width,
};
const TEXT = {
    xxSmall: 11,
    xSmall: 13,
    small: 15,
    medium: 17,
    large: 21,
    xLarge: 27,
    xxLarge: 32,
};
const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        evevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        evevation: 5,
    },
};
export { COLORS, SHADOWS, SIZES, TEXT };
