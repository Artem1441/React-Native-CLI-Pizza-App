import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, Alert } from "react-native"

const CardItem = ({ name, url, price }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={() => Alert.alert("You've chosen:", name)}>
            <Image style={styles.image} source={{ uri: url }} />
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{price}$</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: "45%",
    },
    image: {
        marginTop: 15,
        width: "100%",
        height: 170,
        borderRadius: 4
    },
    text: {
        color: "black"
    }
})

export default CardItem
