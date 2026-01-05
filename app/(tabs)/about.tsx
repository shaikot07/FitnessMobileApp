import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function about() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-green-500">About Screen</Text>

      <Link href="/" className="mt-4 text-blue-600">
        Go to Contact
      </Link>
    </View>
  );
}
