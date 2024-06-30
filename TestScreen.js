import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  PanResponder,
  StatusBar,
  TouchableOpacity,
  Linking,
  PushNotificationIOS,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TestScreen({ navigation, route, referer }) {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, {vx, dx}) => {
      pan.extractOffset();
    },
  });
  pan.setOffset({x:-200,y:0})
  const goBack = () => {
    navigation.navigate(route.params.referer);
  };

  const saveImage = () => {
    Linking.openURL(route.params.url);
  };

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
      <TouchableOpacity style={styles.back} onPress={goBack}>
        <MaterialCommunityIcons
          name={"keyboard-return"}
          color={"white"}
          size={30}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.save} onPress={saveImage}>
        <MaterialCommunityIcons
          name={"content-save"}
          color={"white"}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
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
    width: "100%",
    position: "absolute",
    top: 0,
    marginTop: 90,
    textAlign: "center",
    color: "rgba(255,255,255,0.9)",
    fontSize: 100,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  date: {
    width: "100%",
    position: "absolute",
    top: 0,
    marginTop: 70,
    textAlign: "center",
    color: "rgba(255,255,255,0.9)",
    fontSize: 20,
    fontWeight: "500",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  back: {
    position: "absolute",
    bottom: 47,
    left: 47,
    width: 50,
    height: 50,
    backgroundColor: "rgba(28,28,30,0.9)",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  save: {
    position: "absolute",
    bottom: 47,
    right: 47,
    width: 50,
    height: 50,
    backgroundColor: "rgba(28,28,30,0.9)",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
