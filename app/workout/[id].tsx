import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const workouts = [
  {
    id: 1,
    title: "Full Body Workout",
    description:
      "Strengthen, tone, and build endurance with this 45 min routine.",
    bgColor: "bg-red-600",
    duration: "45 min",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Cardio Blast",
    description: "High-intensity cardio to burn calories and improve stamina.",
    bgColor: "bg-red-700",
    duration: "30 min",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Strength Training",
    description:
      "Build muscle strength with focused exercises for all major groups.",
    bgColor: "bg-red-800",
    duration: "50 min",
    level: "Advanced",
  },
  // others same...
];

export default function WorkoutDetails() {
  const { id } = useLocalSearchParams();
  const workout = workouts.find((w) => w.id === Number(id));

  if (!workout) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl text-red-500">Workout not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className={`flex-1 ${workout.bgColor}`}>
      {/* Header */}
      <View className="p-6">
        <Pressable onPress={() => router.back()}>
          <Text className="text-white mb-6">← Back</Text>
        </Pressable>

        <Text className="text-4xl font-extrabold text-white">
          {workout.title}
        </Text>

        {/* Badges */}
        <View className="flex-row gap-3 mt-4">
          <View className="bg-white/20 px-4 py-1 rounded-full">
            <Text className="text-white">{workout.duration}</Text>
          </View>
          <View className="bg-white/20 px-4 py-1 rounded-full">
            <Text className="text-white">{workout.level}</Text>
          </View>
        </View>
      </View>

      {/* Content Card */}
      <View className="flex-1 bg-black/50 rounded-t-3xl p-6">
        <Text className="text-lg text-white leading-6">
          {workout.description}
        </Text>

        {/* Info */}
        <View className="mt-6">
          <Text className="text-white">Workout ID</Text>
          <Text className="text-white font-bold">#{workout.id}</Text>
        </View>

        {/* CTA */}
        <Pressable
          onPress={() => router.push("/")}
          className="mt-auto bg-red-600 py-4 rounded-xl items-center"
        >
          <Text className="text-white text-lg font-bold">Start Workout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
