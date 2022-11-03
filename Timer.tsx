import { Text, View } from "react-native";
import { useEffect, useState } from "react";

type Props = {
  lastSeen: number;
};

export default function Timer({ lastSeen }: Props) {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const presentTimestamp = new Date().getTime();

    if (presentTimestamp - lastSeen < 60000) {
      setText("0 ... 60 seconds ago");
    } else {
      setText("1 .. n' minutes");
    }
  }, [lastSeen]);

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
