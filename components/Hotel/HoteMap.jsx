import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
export default function HoteMap({ coordinates }) {
    return (
        <TouchableOpacity>
            <MapView style={styles.maps} region={coordinates}>
                <Marker coordinate={coordinates} title={coordinates.title} />
            </MapView>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    maps: {
        marginVertical: 10,
        height: 120,
        width: "100%",
        borderRadius: 12,
    },
});
