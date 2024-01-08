import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLORS.blue,
        marginHorizontal: SIZES.small,
        borderWidth: 1,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
    },
    input: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
    },
    searchWrapper: {
        flex: 1,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightBlue,
    },
    searchImg: {
        resizeMode: "contain",
        width: "100",
        height: SIZES.height,
        paddingHorizontal: 20,
    },
    title: {
        marginBottom: 10,
        marginHorizontal: 12,
    },
});
export default styles;
