import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
    return (
        <ScrollView style={styles.container} indicatorStyle='white'>
            <Text style={styles.heading}>Welcome to Little Lemon</Text>
            <Text style={styles.description}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        padding: 40,
        fontSize: 50,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    description: {
        fontSize: 38,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
});

export default WelcomeScreen;
