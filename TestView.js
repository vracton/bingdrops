import React, {useState, useRef} from 'react';
import {Text, View, StyleSheet, Image, Animated, PanResponder} from 'react-native';

export default function TestView({route}) {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: 0}],
        }}
        {...panResponder.panHandlers}>
        <View style={{backgroundColor: "#1C1C1E", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Image
      style={styles.logo}
      source={{
        uri: route.params.url,
      }}
    />
  </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  logo: {
    top:0,
    left:0,
    marginLeft: 0,
    position: "absolute",
    height: "100%",
    aspectRatio: 16/9
  },
});