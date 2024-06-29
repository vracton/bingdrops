import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WPCard({ img, title }) {
  const [active, setCount] = useState(0);
  const onPress = async () => {
    setCount((prev) => !prev);
    const data = await AsyncStorage.getItem("favorites");
    let d = JSON.parse(JSON.stringify(data));
    if (data == null) {
      d = {};
      d.change = 0
      d.img = title;
      console.log("none");
    } else {
      d.change++
      if (active) {
        d.img = title;
        console.log("add");
      } else {
        delete d.img;
        console.log("delete");
      }
    }
    console.log(d)
    const jsonValue = JSON.stringify(d);
    await AsyncStorage.setItem("favorites", jsonValue);
  };
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>01/01/70</Text>
      <Text style={styles.copy}>© John D. Example Pictures</Text>
      <TouchableOpacity style={styles.star} onPress={onPress}>
        <MaterialCommunityIcons
          name={active ? "star" : "star-outline"}
          color={active ? "rgb(255,214,10)" : "white"}
          size={30}
        />
      </TouchableOpacity>
      <View
        style={{
          borderColor: "rgba(142,142,147,0.6)",
          borderBottomWidth: 2,
          width: "90%",
          marginTop: -8,
          marginBottom: 8,
          marginLeft: "5%",
          display: title != "The sacred lakes of Kelimutu" ? "block" : "none",
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
    marginTop: 22,
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
