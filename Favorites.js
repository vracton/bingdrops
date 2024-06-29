import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import WPCard from "./Components/wallpaperCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FavsScreen() {
  const [favData, setData] = useState({});
 // const a = setInterval(
  async function update(){
    const data = await AsyncStorage.getItem("fav");
    let d = JSON.parse(data)
    let listData = []
    if (d!=null){
      for (let i in d){
        console.log(d[i])
        listData.push({
          img: data[i],
          title: i
        })
      }
    }
    setData(listData)
  }//, 1000)
update()
  return (
    <View
      style={{
        backgroundColor: "#000",
        flex: 1 /*, justifyContent: 'center', alignItems: 'center'*/,
      }}
    >
      <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
        data={favData}
        renderItem={({ item }) => (
          <WPCard img={item.img} title={item.title}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 16,
    padding: 8,
    marginLeft: "5%",
    marginBottom: "25%",
    backgroundColor: "#1C1C1E",
  }
});
