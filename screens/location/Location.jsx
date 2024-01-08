import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function Location() {
    const coordinates = {
        latitude: 35.6855,
        longotude: 139.6884,
        latitudeDelta: 0.01,
        longotudeDelta: 0.01,
        title: "my location",
    };
    return (
        <MapView initialRegion={coordinates} style={styles.mapStyle}>
            <Marker coordinate={coordinates} title={coordinates.title} />
        </MapView>
    );
}

const styles = StyleSheet.create({
    mapStyle: {
        ...StyleSheet.absoluteFillObject,
    },
});
