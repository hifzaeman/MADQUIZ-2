import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Button = ({ onPress, title, width, height }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { width: width, height: height, backgroundColor: "#4CAF50" }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: "#FFFFFF", fontSize: 18 }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", // Center the button horizontally
    alignItems: "center", // Center the button vertically
  },
  button: {
    margin: 10,
    backgroundColor: "#E91E63",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Button;
