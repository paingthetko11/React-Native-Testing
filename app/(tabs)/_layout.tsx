import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

import { HapticTab } from "@/components/haptic-tab";

function TabIcon({
  focused,
  name,
}: {
  focused: boolean;
  name: React.ComponentProps<typeof Ionicons>["name"];
}) {
  if (focused) {
    return (
      <View style={styles.activeIconWrap}>
        <Ionicons color="#161616" name={name} size={22} />
      </View>
    );
  }

  return (
    <View style={styles.iconWrap}>
      <Ionicons color="#818187" name={name} size={21} />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Exchange",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="swap-horizontal" />
          ),
        }}
      />
      <Tabs.Screen
        name="stock"
        options={{
          title: "Cards",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="card-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "More",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="grid-outline" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: "12%",
    right: "12%",
    bottom: 18,
    height: 64,
    backgroundColor: "#1d1d1e",
    borderTopWidth: 0,
    borderRadius: 24,
    paddingHorizontal: 6,
    paddingTop: 8,
    paddingBottom: 8,
    elevation: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.32,
    shadowRadius: 18,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#a8ff25",
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
