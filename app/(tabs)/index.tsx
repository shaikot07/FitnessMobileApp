import { Link } from "expo-router";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
export default function Index() {
  const workouts = [
    {
      id: "full-body",
      title: "Full Body Workout",
      description:
        "Strengthen, tone, and build endurance with this 45 min routine.",
      bgColor: "bg-red-600",
    },
    {
      id: "cardio-blast",
      title: "Cardio Blast",
      description:
        "High-intensity cardio to burn calories and improve stamina.",
      bgColor: "bg-red-700",
    },
    {
      id: "strength-trainingy",
      title: "Strength Training",
      description:
        "Build muscle strength with focused exercises for all major groups.",
      bgColor: "bg-red-800",
    },
    {
      id: "strength-traininge",
      title: "Strength Training",
      description:
        "Build muscle strength with focused exercises for all major groups.",
      bgColor: "bg-red-800",
    },
  ];
  return (
    <ImageBackground
      source={require("@/assets/images/bgGym.jpg")}
      resizeMode="cover"
    >
      <View className="flex-1 bg-black bg-opacity-60">
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {/* Header */}
          <Text className="text-4xl font-extrabold text-red-600 mb-2 text-center">
            FitLife Gym
          </Text>
          <Text className="text-gray-200 text-center mb-8">
            Push your limits. Achieve your goals.
          </Text>

          {/* Map cards */}
          {workouts.map((workout) => (
            <View
              key={workout.id}
              className={`${workout.bgColor} rounded-2xl p-6 mb-6 shadow-lg`}
            >
              <Text className="text-white text-2xl font-bold mb-2">
                {workout.title}
              </Text>
              <Text className="text-red-100 mb-4">{workout.description}</Text>

              <Link href={`/workout/${workout.id}`} asChild>
                <Pressable className="bg-black py-3 px-6 rounded-xl items-center">
                  <Text className="text-red-600 font-bold text-lg">
                    Start Workout
                  </Text>
                </Pressable>
              </Link>
            </View>
          ))}
          {/* try to make new component with raw  */}
          <View className="flex-row justify-center h-10 w-full bg-pink-500"></View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
