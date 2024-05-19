import { View, Text, Button } from "react-native";
import React, { useState } from "react";

export default function Tab() {
  const [tab, setTab] = useState("TAB1");

  return (
    <View
      style={{
        marginHorizontal: 10,
        marginTop: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "baseline",
          //   borderWidth: 1,
          //   borderColor: "yellow",
        }}
      >
        <Button onPress={() => setTab("TAB1")} title="TAB1" />
        <Button onPress={() => setTab("TAB2")} title="TAB2" />
      </View>
      <View
        style={{
          padding: 100,
        }}
      ></View>
      {tab === "TAB1" ? (
        <View>
          <Text>tab1</Text>
        </View>
      ) : (
        <View>
          <Text>tab2</Text>
        </View>
      )}
    </View>
  );
}
