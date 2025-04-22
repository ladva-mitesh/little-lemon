import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            { name: 'Hummus', price: '$5.00' },
            { name: 'Moutabal', price: '$5.00' },
            { name: 'Falafel', price: '$7.50' },
            { name: 'Marinated Olives', price: '$5.00' },
            { name: 'Kofta', price: '$5.00' },
            { name: 'Eggplant Salad', price: '$8.50' },
        ],
    },
    {
        title: 'Main Dishes',
        data: [
            { name: 'Lentil Burger', price: '$10.00' },
            { name: 'Smoked Salmon', price: '$14.00' },
            { name: 'Kofta Burger', price: '$11.00' },
            { name: 'Turkish Kebab', price: '$15.50' },
        ],
    },
    {
        title: 'Sides',
        data: [
            { name: 'Fries', price: '$3.00', id: '11K' },
            { name: 'Buttered Rice', price: '$3.00' },
            { name: 'Bread Sticks', price: '$3.00' },
            { name: 'Pita Pocket', price: '$3.00' },
            { name: 'Lentil Soup', price: '$3.75' },
            { name: 'Greek Salad', price: '$6.00' },
            { name: 'Rice Pilaf', price: '$4.00' },
        ],
    },
    {
        title: 'Desserts',
        data: [
            { name: 'Baklava', price: '$3.00' },
            { name: 'Tartufo', price: '$3.00' },
            { name: 'Tiramisu', price: '$5.00' },
            { name: 'Panna Cotta', price: '$5.00' },
        ],
    },
];

const MenuItemts = () => {
    return (
        <View style={menuStyles.container}>
            <SectionList
                sections={menuItemsToDisplay}
                renderItem={({ item }) => (
                    <View style={menuStyles.itemContainer}>
                        <Text style={menuStyles.itemText}>{item.name}</Text>
                        <Text style={menuStyles.itemText}>{item.price}</Text>
                    </View>
                )}
                renderSectionHeader={({ section }) => {
                    return (
                        <Text style={menuStyles.sectionHeader}>
                            {section.title}
                        </Text>
                    )
                }}
                stickySectionHeadersEnabled
                style={{ flex: 1 }}
            />
        </View>
    );
}

export default MenuItemts;

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    itemText: {
        fontSize: 20,
        color: "#F4CE14"
    },
    sectionHeader: {
        fontSize: 26,
        backgroundColor: "#F4CE14",
        color: "black",
        textAlign: "center",
        flexWrap: "wrap"
    }
});
