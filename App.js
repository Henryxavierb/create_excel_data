import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import createExecelFile from "./index";

export default function App() {
  const data = [
    {
      name: "John",
      city: "Seattle",
    },
    {
      name: "Mike",
      city: "Los Angeles",
    },
    {
      name: "Zach",
      city: "New York",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => createExecelFile(data, "pacientes")}
      >
        <Text style={styles.buttonText}>Exportar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    height: 50,
    borderRadius: 6,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#55caee",
  },
  buttonText: {
    color: "#fdfafe",
    fontWeight: "bold",
  },
});
