import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from 'expo-haptics';

export default function WPCard({ img, title, copyright, date, updateFunc, displaySep, navigation, refererPage }) {
  const [active, setCount] = useState(0);

  useEffect(() => {
    async function func() {
      const data = await AsyncStorage.getItem("favorites");
      let d = JSON.parse(data);
      if (d != null) {
        if (d[title]!=null){
          setCount(true)
        }
      }
    }
    func();
  }, []);

  const onFavPress = async () => {
    setCount((prev) => !prev);
    const data = await AsyncStorage.getItem("favorites");
    let d = JSON.parse(JSON.stringify(JSON.parse(data)));
    if (data == null) {
      d = {};
      d[title] = img;
    } else {
      if (!active) {
        d[title] = img;
      } else {
        delete d[title];
      }
    }
    //console.log(d);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    const jsonValue = JSON.stringify(d);
    await AsyncStorage.setItem("favorites", jsonValue);
    if (updateFunc){
      updateFunc()
    }
  };

  const onImagePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    navigation.navigate("Test",{url: img, referer: refererPage})
  }

  return (
    <View>
      <TouchableOpacity onPress={onImagePress}>
      <Image
        style={styles.logo}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.copy}>{copyright}</Text>
      <TouchableOpacity style={styles.star} onPress={onFavPress}>
        <MaterialCommunityIcons
          name={active ? "star" : "star-outline"}
          color={active ? "rgb(255,214,10)" : "white"}
          size={30}
        />
      </TouchableOpacity>
      </TouchableOpacity>
      <View
        style={{
          borderColor: "rgba(142,142,147,0.6)",
          borderBottomWidth: 2,
          width: "90%",
          marginTop: -8,
          marginBottom: 8,
          marginLeft: "5%",
          display: displaySep ? "block" : "none",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 18,
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: "20",
  },
  date: {
    padding: 10,
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: 24,
    fontSize: 16,
  },
  star: {
    padding: 10,
    fontSize: 18,
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    right: 0,
  },
  copy: {
    padding: 10,
    color: "rgb(199,199,204)",
    position: "absolute",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 16,
    fontSize: 12,
    bottom: 0,
  },
  logo: {
    borderRadius: 8,
    width: "100%",
    aspectRatio: 3 / 4,
    borderColor: "rgba(142,142,147,0.6)",
    borderWidth: 1,
    marginBottom: 16,
  },
});
