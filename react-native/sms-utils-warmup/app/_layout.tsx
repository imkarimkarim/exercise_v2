import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="mmd" />
    </Stack>
  );
}
