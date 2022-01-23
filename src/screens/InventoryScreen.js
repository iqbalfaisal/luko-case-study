import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { InventoryCard } from "../components";
import { Colors } from "../utils/Colors";
import AddInventoryModal from "../components/AddInventoryModal";
import { listSelector } from "../store/reducers/InventoryReducer";

export default function InventoryScreen() {
  const [isVisible, setVisibilty] = useState(false);

  const inventoryList = useSelector(listSelector);

  const { container, headingView, titleStyle, addIconStyle } = styles;

  onCancel = () => {
    setVisibilty(false);
  };

  return (
    <>
      <View style={container}>
        <View style={headingView}>
          <Text style={titleStyle}>Inventory</Text>
          <Ionicons
            onPress={() => setVisibilty(true)}
            size={32}
            style={addIconStyle}
            name="add-circle"
            color={Colors.blue}
          />
        </View>
        <FlatList
          style={{ flex: 1 }}
          numColumns={2}
          data={inventoryList}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <InventoryCard item={item} />}
        />
      </View>
      <AddInventoryModal visible={isVisible} onCancel={onCancel} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  headingView: {
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 8,
  },

  titleStyle: {
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 42,
    color: Colors.grey,
  },

  addIconStyle: {
    position: "absolute",
    right: 0,
  },
});
