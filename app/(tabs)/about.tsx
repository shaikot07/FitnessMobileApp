import GymCard from "@/components/gymCard/GymCard";
import { Link } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function about() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <GymCard />

        <Link href="/" className="mt-4 text-blue-600">
          Go to Contact
        </Link>
      </View>
    </SafeAreaView>
  );
}
