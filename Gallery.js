import { Text, View, FlatList, StyleSheet, Image } from "react-native";

export default function GalleryScreen() {
  return (
    <View
      style={{
        backgroundColor: "#1C1C1E",
        flex: 1 /*, justifyContent: 'center', alignItems: 'center'*/,
      }}
    >
      <FlatList
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
          <View>
            <Image
              style={styles.logo}
              source={{
                uri: "https://bing.com"+item.img,
              }}
            />
            <Text style={styles.item}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "white"
  },
  logo: {
    width: 480,
    height: 270,
  },
});
