import { Tabs, router } from "expo-router";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    router.replace("/[user]");
  }, []);
  return <Tabs />;
}
