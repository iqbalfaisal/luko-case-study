import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../utils/Colors";

export default function Button({ disabled, title, onPress, style }) {
  const { button, buttonText } = styles;

  return (
    <Pressable disabled={disabled} style={[button, style]} onPress={onPress}>
      <Text style={[buttonText, { color: disabled ? "#C0BEB8" : Colors.blue }]}>
        {title}
      </Text>
    </Pressable>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonText: {
    color: Colors.blue,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: 17,
  },
});
