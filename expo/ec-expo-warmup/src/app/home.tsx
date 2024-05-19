import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

export default function home() {
  const [text, setText] = useState("");
  return (
    <View>
      <Text>home</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
        }}
        value={text}
        onChange={(e) => {
          setText(e.nativeEvent.text);
        }}
      />
      <Button
        title="submit"
        onPress={() => {
          router.replace(`/${text}`);
        }}
      />
    </View>
  );
}
