import React, { useState, useEffect, Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import WPCard from "./Components/wallpaperCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';

export default function FavsScreen({navigation}) {
  const [favData, setData] = useState({});
  useFocusEffect(
    React.useCallback(() => {
      update()
      return () => {
        //screen unfocused
      };
    }, [])
  );
  useEffect(() => {
    async function func() {
      update();
    }
    func();
  }, []);
  async function update() {
    const data = await AsyncStorage.getItem("favorites");
    let d = JSON.parse(data);
    let listData = [];
    if (d != null) {
      for (let i in d) {
        console.log(d[i]);
        listData.push({
          img: d[i],
          title: i,
          displaySep: true
        });
      }
    }
    if (listData.length>0){
      listData[listData.length-1].displaySep = false
    }
    setData(listData);
  }
  
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
          <WPCard img={item.img} title={item.title} displaySep={item.displaySep} navigation={navigation} refererPage={"Favorites"} startState={true} updateFunc={update}/>
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
  },
});
