import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type DashboardPlaceholderScreenProps = {
  title: string;
  description: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
};

export function DashboardPlaceholderScreen({
  title,
  description,
  iconName,
}: DashboardPlaceholderScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconWrap}>
            <Ionicons color="#171717" name={iconName} size={34} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#171717",
  },
  container: {
    flex: 1,
    backgroundColor: "#171717",
    paddingBottom: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "86%",
    maxWidth: 420,
    paddingVertical: 36,
    paddingHorizontal: 24,
    borderRadius: 28,
    backgroundColor: "#1f1f1f",
    alignItems: "center",
  },
  iconWrap: {
    width: 82,
    height: 82,
    borderRadius: 28,
    backgroundColor: "#a8ff25",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: {
    color: "#f4f4f5",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
  },
  description: {
    color: "#8d8d92",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    maxWidth: 280,
  },
});
