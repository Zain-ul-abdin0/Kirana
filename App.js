import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Stack from './navigation/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
