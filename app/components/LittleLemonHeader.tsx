import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LittleLemonHeader = () => {
    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText} numberOfLines={3}>
                Little Lemon
            </Text>
        </View>
    );
}

export default LittleLemonHeader;

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
