import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function WorkoutDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-3xl font-bold text-red-600 mb-4">
        Workout Details
      </Text>
      <Text className="text-xl text-gray-700">
        You are viewing the <Text className="font-bold">{id}</Text> workout.
      </Text>
      <Text className="text-gray-500 mt-2">
        Here you can put exercises, duration, tips, and images for {id}.
      </Text>
    </View>
  );
}
