import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 10,
    },
    titleContainer: {
        position: "absolute",
        margin: 15,
        backgroundColor: COLORS.lightWhite,
        top: 120,
        left: 0,
        right: 0,
        borderRadius: 20,
    },
    titleColum: {
        padding: 15,
    },
    bottom: {
        backgroundColor: COLORS.lightWhite,
        paddingHorizontal: 30,
        height: 90,
        paddingVertical: 20,
    },
});
export default styles;
