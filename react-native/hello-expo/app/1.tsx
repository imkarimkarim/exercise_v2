import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Component() {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            color: "white",
          }}
        >
          Component
        </Text>
      </View>
    </SafeAreaView>
  );
}
