import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItemts = () => {
    return (
        <View style={menuStyles.container}>
            <ScrollView
                style={menuStyles.innerContainer}
                indicatorStyle='white'
            >
                <Text style={menuStyles.headerText}>View Menu</Text>
                <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
}

export default MenuItemts;

const menuStyles = StyleSheet.create({
    container: {
        flex: 0.75,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 40,
        backgroundColor: 'black',
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        flexWrap: 'wrap',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 36,
    },
});
