import * as React from "react";
import {StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GalleryScreen from "./Gallery";
import FavsScreen from "./Favorites";
import SettingsScreen from "./Settings";
import TestView from "./TestView";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions = {{
        tabBarStyle: styles.tab,
        headerStyle: styles.header,
        headerTintColor: "white"
      }}>
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          tabBarColor="#000"
          options={{
            tabBarLabel: "Gallery",
            headerStyle: styles.header,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="image-multiple" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavsScreen}
          onF
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="View"
          component={TestView}
          options={{
            headerShown: false,
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: 80,
    paddingHorizontal: 5,
    paddingTop: 0,
    backgroundColor: '#000',
    position: 'absolute',
    borderTopWidth: 0,
  },
  header: {
    backgroundColor: '#000',
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0
  },
});