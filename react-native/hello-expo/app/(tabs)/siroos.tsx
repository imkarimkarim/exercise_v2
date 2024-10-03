import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function siroos() {
  return (
    <SafeAreaView>
      <Text
        style={{
          color: "white",
        }}
      >
        here we go
      </Text>
      <Link href={"/1"}>
        <Text
          style={{
            color: "white",
          }}
        >
          three
        </Text>
      </Link>
    </SafeAreaView>
  );
}
