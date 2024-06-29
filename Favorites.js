import React, { useState } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import WPCard from "./Components/wallpaperCard";
//import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FavsScreen() {
  //const [favData, setData] = useState({});
  // const a = setInterval(async()=>{
  //   const data = await AsyncStorage.getItem("favorites");
  //   let d = JSON.parse(JSON.stringify(data));
  //   let listData = []
  //   if (d!=null){
  //     for (let i of d){
  //       listData.push({
  //         img: i,
  //         title: d[i]
  //       })
  //     }
  //   }
  //   setData(listData)
  // }, 1000)
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
        data={[
          {
            img: "/th?id=OHR.KokinoMacedonia_EN-US0466604378_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            title: "Sunrise on the solstic",
          },
          {
            img: "/th?id=OHR.LewaGiraffe_EN-US0571205457_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            title: "Spot-on connection",
          },
          {
            img: "/th?id=OHR.BrazilRainforest_EN-US0704211658_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            title: "Getting lost in the mist",
          },
          {
            img: "/th?id=OHR.DhakaBangladesh_EN-US0835586345_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            title: "Dark night, city lights",
          },
          {
            img: "/th?id=OHR.FloresIsland_EN-US1042279828_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
            title: "The sacred lakes of Kelimutu",
          },
        ]}
        renderItem={({ item }) => (
          <WPCard img={"https://bing.com"+item.img} title={item.title}/>
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
