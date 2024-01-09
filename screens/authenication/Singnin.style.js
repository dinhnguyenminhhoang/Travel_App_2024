import { StyleSheet } from "react-native";
import { COLORS, SIZES, TEXT } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.lightWhite,
        flex: 1,
    },
    inputWrapper: (borderColor) => ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
    }),
    wrapper: {
        marginBottom: 20,
    },
    label: {
        fontFamily: "mRegular",
        fontSize: TEXT.small,
        marginBottom: 10,
        marginEnd: 5,
        textAlign: "right",
    },
    errMessage: {
        color: COLORS.red,
        fontSize: SIZES.small,
        marginTop: 5,
        marginLeft: 5,
    },
});
export default styles;
