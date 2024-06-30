import React, { useState, useEffect, Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import WPCard from "./Components/wallpaperCard";
import { useFocusEffect } from '@react-navigation/native';

export default function GalleryScreen({navigation}) {
  const [listData, setData] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      update()
      return () => {
        //unfocus
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
    let data = []
    for (let i=0;i<=7;i++){
      const res = JSON.parse(await fetch(`http://www.bing.com/HPImageArchive.aspx?format=js&idx=${i}&n=1&mkt=en-US`).then((res)=>{return res.text()}));
      data.push({
        img: "https://bing.com"+res.images[0].url.replace("1920x1080","UHD").replace("1920x1080","UHD"),
        title: res.images[0].title,
        copy: res.images[0].copyright.split("(")[1].split(")")[0],
        date: res.images[0].startdate.slice(4,6)+"/"+res.images[0].startdate.slice(6,8)+"/"+res.images[0].startdate.slice(2,4),
        displaySep: i==7?false:true
      })
    }
    setData(data)
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
        data={listData}
        renderItem={({ item }) => (
          <WPCard navigation={navigation} img={item.img} title={item.title} copyright={item.copy} date={item.date} displaySep={item.displaySep} refererPage={"Gallery"} startState={false}/>
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
