import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItemts from './components/MenuItemts';
import LoginScreen from './components/LoginScreen';
export default function Index() {
  return (
    <>
      <View
        style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  }
})