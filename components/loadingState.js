import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { ActivityIndicator } from "react-native-web";

const loadingState = ({ size = "large", color = theme.colors.primary }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default loadingState;

const styles = StyleSheet.create({});
