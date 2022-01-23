import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  HomeScreen,
  InsuranceScreen,
  InventoryScreen,
  MenuScreen,
  RealtyScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="InventoryScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Insurance",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="umbrella" color={color} size={size} />
          ),
        }}
        name="InsuranceScreen"
        component={InsuranceScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Inventory",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="view-split-horizontal"
              color={color}
              size={size}
            />
          ),
        }}
        name="InventoryScreen"
        component={InventoryScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Realty",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
        name="RealtyScreen"
        component={RealtyScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
        name="MenuScreen"
        component={MenuScreen}
      />
    </Tab.Navigator>
  );
}
