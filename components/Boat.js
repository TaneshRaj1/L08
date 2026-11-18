import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'skyblue',
        marginBottom: 20,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 3,
        overflow: 'hidden'

    },
    titleRow: {
        alignItems: 'center',
        textAlign: 'center'
    },
    name: {
        fontSize: 30,
        backgroundColor: '#002FA7',
        alignSelf: 'stretch',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',               // no longer the same as the background
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
    },
    description: {
        backgroundColor: '#82E5D1',
        fontSize: 19,
        textAlign: 'center',
        color: 'black',
    },
});

const Boat = ({Boatname, Boatdescription, icon_name, icon_color, Boatimage}) => {
    return (
        <View style={styles.card}>
            <View style={styles.titleRow}>
                <FontAwesome6 name={icon_name}  size={40} color={icon_color}/>
                <Text style={styles.name}>{Boatname}</Text>
            </View>

            <Image source={Boatimage} style={styles.image}/>
            <Text style={styles.description}>{Boatdescription}</Text>
        </View>
    );
};

export default Boat;