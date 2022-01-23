import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Alert,
  Text,
  Modal,
  StyleSheet,
  View,
  Pressable,
  Platform,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { useDispatch } from "react-redux";

import { Button, Input, Picker } from ".";
import { Colors } from "../utils/Colors";
import { addItem } from "../store/actions/InventoryAction";
import { INVENTORY_TYPES } from "../utils/Constants";

const defaultValues = {
  name: "",
  type: "",
  category: "",
  purchasePrice: "",
  description: "",
  photo: null,
};

export default function AddInventoryModal({ visible, onCancel }) {
  const dispatch = useDispatch();

  const { modalView, headerView, circleView, imageStyle } = styles;

  const [state, setState] = useState(defaultValues);

  const { name, category, purchasePrice, description, photo } = state;

  const updateField = (field) => {
    setState((prev) => ({ ...prev, ...field }));
  };

  onTextChange = (text, id) => {
    updateField({ [id]: text });
  };

  pickImageFromLibrary = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          updateField({ photo: result.uri });
        }
      }
    }
  };

  pickImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    } else {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!result.cancelled) {
        updateField({ photo: result.uri });
      }
    }
  };

  pickImage = () => {
    Alert.alert("Option", "Pick Image", [
      {
        text: "Gallery",
        onPress: () => pickImageFromLibrary(),
      },
      { text: "Cancel", onPress: () => {}, cancelable: true, style: "cancel" },
      {
        text: "Camera",
        onPress: () => pickImageFromCamera(),
      },
    ]);
  };

  onPressCancel = () => {
    setState(defaultValues);
    onCancel();
  };

  onPressAdd = () => {
    dispatch(addItem(state));
    onPressCancel();
  };

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={modalView}>
        <View style={headerView}>
          <Button title={"Cancel"} onPress={onPressCancel} />
          <Button
            style={{ position: "absolute", right: 0 }}
            title={"Add"}
            onPress={onPressAdd}
            disabled={
              name === "" ||
              category === "" ||
              purchasePrice === "" ||
              photo === ""
            }
          />
        </View>

        <Pressable onPress={pickImage} style={circleView}>
          {photo !== null ? (
            <Image source={{ uri: photo }} style={imageStyle} />
          ) : (
            <>
              <MaterialIcons
                name={"camera-alt"}
                color={Colors.blue}
                size={50}
              />
              <Text>Add Photo</Text>
            </>
          )}
        </Pressable>
        <Input
          id="name"
          label={"Name"}
          value={name}
          placeholder="Bracelet"
          onChangeText={onTextChange}
        />
        <Picker
          label={"Category"}
          placeholder={"Select a category..."}
          id={"category"}
          value={category}
          onValueChange={onTextChange}
          items={INVENTORY_TYPES}
        />
        <Input
          id="purchasePrice"
          label={"Value"}
          value={purchasePrice}
          placeholder="700"
          keyboardType="number-pad"
          rightIcon="euro"
          onChangeText={onTextChange}
        />
        <Input
          id="description"
          multiline
          label={"Description"}
          value={description}
          placeholder="Optional"
          onChangeText={onTextChange}
        />
      </View>
    </Modal>
  );
}

AddInventoryModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F4F3EF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  headerView: {
    flexDirection: "row",
  },

  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },

  circleView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
});
