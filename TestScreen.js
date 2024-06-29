import React, { useState, useRef} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  PanResponder, StatusBar
} from "react-native";

export default function TestScreen({ navigation, route }) {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
        console.log(pan.x)
      },
    })
  ).current;

  return (
    <View style={styles.container}>  
    <StatusBar hidden />
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: 0 }],
        }}
        {...panResponder.panHandlers}
      >
        <View
          style={{
            backgroundColor: "#1C1C1E",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.logo}
            source={{
              uri: route.params.url,
            }}
          />
        </View>
      </Animated.View>
      <Text style={styles.date}>Sunday, January 1</Text>
      <Text style={styles.time}>10:09</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    top: 0,
    left: 0,
    marginLeft: 0,
    position: "absolute",
    height: "100%",
    aspectRatio: 16 / 9,
  },
  time: {
    position: "absolute",
    top: 0,
    marginTop: 90,
    textAlign: "center",
    color:"rgba(255,255,255,0.9)",
    fontSize: 100,
    fontWeight: "bold",
    fontFamily: 'SF Pro Rounded Regular'
  },
  date: {
    position: "absolute",
    top: 0,
    marginTop: 60,
    textAlign: "center",
    color:"rgba(255,255,255,0.9)",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: 'SF Pro Rounded Regular'
  }
});
