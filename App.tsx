import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Timer from "./Timer";

export default function App() {
  return (
    <View style={styles.container}>
      <Timer lastSeen={1667483105704} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
