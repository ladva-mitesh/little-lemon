import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
const Stack = createStackNavigator();
export default function Index() {

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <View
          style={styles.container}>
          <LittleLemonHeader />
          <Stack.Navigator initialRouteName="welcome">
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='welcome' component={WelcomeScreen} />
          </Stack.Navigator>
          <View style={styles.footerContainer}>
            <LittleLemonFooter />
          </View>
        </View>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});