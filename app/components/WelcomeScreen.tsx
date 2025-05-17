import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, useColorScheme } from 'react-native';

const WelcomeScreen = () => {
    const theme = useColorScheme();
    const isDark = theme === "dark";
    return (
        <ScrollView style={[styles.container, { backgroundColor: isDark ? "#333333" : "#fff" }]} indicatorStyle='white'>
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.image}
                    source={require("./logo.png")}
                    resizeMode='cover'
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />
                <Text style={[styles.headerText, { color: isDark ? "#fff" : "#333333" }]}>Little Lemon</Text>
            </View>
            <Text style={[styles.regularText, { color: isDark ? "#fff" : "#333333" }]}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    }
});

export default WelcomeScreen;
