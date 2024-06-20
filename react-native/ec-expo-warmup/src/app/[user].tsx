import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { faker } from "@faker-js/faker";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function user() {
  const { user } = useLocalSearchParams();
  return (
    // <View>
    //   <Text>{user}</Text>
    //   <Button title="get random avatar" />
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={faker.image.avatar()}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
