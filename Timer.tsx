import { Text, View } from "react-native";
import { useEffect, useState } from "react";

type Props = {
  lastSeen: number;
};

export default function Timer({ lastSeen }: Props) {
  const [timeAgo, setTimeAgo] = useState<number>(new Date().getTime());
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (lastSeen - timeAgo > 60) {
      setText("0 ... 60 seconds ago");
    } else {
      setText("1 .. n' minutes");
    }

    setTimeAgo(lastSeen);
  }, [lastSeen]);

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
