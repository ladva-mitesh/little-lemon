import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, View } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {
        isLoggedIn ? (
          <Text style={styles.headerText}>You are Logged In! </Text>
        ) : (
          <>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={'email'}
              keyboardType={'email-address'}
            />
            <TextInput
              style={styles.inputBox}
              value={password}
              onChangeText={onChangePassword}
              placeholder={'password'}
              keyboardType={'default'}
              secureTextEntry={true}
            />
            <Pressable onPress={() => setIsLoggedIn(!isLoggedIn)} style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          </>
        )
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50
  },
  buttonText: {
    color: "black",
    fontSize: 35,
    textAlign: "center"
  }
});



// #EE9972, #EDEFEE, black and white.

