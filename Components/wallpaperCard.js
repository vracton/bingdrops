import React from 'react'
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

export default function WPCard({img, title}) {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.item}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18, 
    height: 44,
    color: "white",
  },
  logo: {
    borderRadius: 8,
    width: "100%",
    height: 270,
    borderColor: "rgba(142,142,147,0.7)",
    borderWidth: 4,
  },
});