import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import {
  StyleSheet,
  TextInput,
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../utils/Colors";

export default function Input(props) {
  const { label, value, id, rightIcon, keyboardType, multiline, ...rest } =
    props;
  const ref = useRef(id);
  const [borderColor, setBorderColor] = useState("#EAE9E3");

  const onChangeText = (text) => {
    if (text !== value) {
      props.onChangeText(text, id);
    }
  };

  const textInput = (
    <View style={styles.container}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}

      <Animated.View
        style={StyleSheet.flatten([
          styles.inputContainer,
          multiline
            ? {
                height: value > 100 ? null : 150,
                borderWidth: 2,
                borderRadius: 10,
              }
            : styles.viewInput,
          { borderColor },
        ])}
      >
        <TextInput
          onFocus={() => setBorderColor(Colors.blue)}
          onBlur={() => setBorderColor("#EAE9E3")}
          placeholderTextColor={Colors.light_grey}
          autoCapitalize="none"
          multiline={multiline}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          ref={ref}
          style={StyleSheet.flatten([
            styles.input,
            multiline
              ? { alignSelf: "flex-start", padding: 10 }
              : [styles.textInput],
          ])}
          {...rest}
          value={value}
          onChangeText={onChangeText}
        />

        {rightIcon && (
          <View style={styles.iconContainer}>
            <MaterialIcons
              name={rightIcon}
              underlayColor={Colors.white}
              color={Colors.grey}
              size={20}
            />
          </View>
        )}
      </Animated.View>
    </View>
  );

  return multiline ? (
    <TouchableWithoutFeedback onPress={() => ref.current.focus()}>
      {textInput}
    </TouchableWithoutFeedback>
  ) : (
    textInput
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rightIcon: PropTypes.string,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
};

Input.defaultProps = {
  keyboardType: "default",
  multiline: false,
};

const styles = StyleSheet.create({
  viewInput: {
    alignSelf: "stretch",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: Colors.white,
    height: 60,
    paddingHorizontal: 10,
  },
  labelStyle: {
    fontWeight: "400",
    fontSize: 14,
    color: Colors.grey,
    lineHeight: 17,
    paddingBottom: 5,
  },
  textInput: {
    fontWeight: "400",
    color: Colors.grey,
    paddingRight: 20,
  },
  container: {
    width: "100%",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  iconContainer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    paddingRight: 5,
  },
  input: {
    alignSelf: "center",
    flex: 1,
    minHeight: 60,
    fontWeight: "400",
  },
});
