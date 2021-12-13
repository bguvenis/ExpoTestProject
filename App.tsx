import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { connectToDevTools } from "react-devtools-core";
if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

export default function App() {
  const width = useSharedValue(100);
  const [counter, setCounter ] =useState(0);

  const onPress = () => {
    setCounter(counter+ 1);
  }


  const rViewStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: 100,
      backgroundColor: 'black'
    }
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Animated.View style={rViewStyle} />
      <Button title='animate width' onPress={() => width.value = withSpring( Math.random()*100)} />
      <View>
        <Text>{counter}</Text>
        <Button title='increment' onPress={onPress}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
