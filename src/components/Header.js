import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const Header = ({ headerText }) => {
  return (
    <View style={styles.viewStyle}>
      <StatusBar hidden />
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    position: "relative",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 32
  }
});

export default Header;
