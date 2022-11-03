import { StyleSheet, TextInput, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Timer from "./Timer";
import { useState } from "react";

export default function App() {
  const [timestamp, onChangeTimestamp] = useState<string>(
    new Date().getTime().toString()
  );

  const handleTimestampChange = (value: string) => {
    onChangeTimestamp(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleTimestampChange}
        value={timestamp}
      />
      <Timer lastSeen={Number(timestamp)} />
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
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
