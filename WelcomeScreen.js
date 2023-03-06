import * as React from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      
      <Text style={styles.headerText}>
        <Image source={require('./img/logo.png')} style={styles.logo} resizeMode={'cover'}/>
        Little Lemon
      </Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
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
    display: 'flex',
    alignItems: 'center'
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  logo: { 
      width: 100, 
      height: 100, 
      marginRight: 10,
      borderRadius: 20, 
    }
});