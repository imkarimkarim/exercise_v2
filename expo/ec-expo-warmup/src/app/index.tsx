import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View>
      <Text>index</Text>
      <Link href={"/home"}>go home</Link>
    </View>
  );
}
