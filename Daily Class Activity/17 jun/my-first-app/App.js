import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Cars from "./components/Cars";
export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const cars = [
    {
      id: 1,
      name: "Audi",
      price: 100000,
    },
    {
      id: 2,
      name: "BMW",
      price: 200000,
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuVisible(!menuVisible)}
        >
          <Text style={styles.hamburger}>☰</Text>
        </TouchableOpacity>
        {menuVisible && (
          <View style={styles.menu}>
            <Text style={styles.menuItem}>Menu Item 1</Text>
            <Text style={styles.menuItem}>Menu Item 2</Text>
            <Text style={styles.menuItem}>Menu Item 3</Text>
          </View>
        )}
        <View style={styles.user}>
          <Image
            style={styles.userImage}
            source={{
              uri: "https://img.icons8.com/?size=100&id=23242&format=png&color=000000",
            }}
          />
        </View>
        <View style={styles.content}>
          <StatusBar style="auto" />
          <View style={styles.body}>
            <Cars Cars={cars} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "relative",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  user: {
    position: "absolute",
    top: 40,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
    overflow: "hidden",
    zIndex: 2,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  body: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    padding: 20,
    zIndex: 1,
  },
  menuButton: {
    zIndex: 3,
    position: "absolute",
    top: 40,
    left: 10,
  },
  hamburger: {
    fontSize: 24,
  },
  menu: {
    paddingTop: 100,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    width: 250,
    height: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: "grey",
    zIndex: 2,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
