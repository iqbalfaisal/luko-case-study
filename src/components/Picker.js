import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Colors } from "../utils/Colors";

export default function Picker(props) {
  const [open, setOpen] = useState(false);

  onValueChange = (value, index) => {
    props.onValueChange(value, index, props.id);
  };

  return (
    <>
      {props.label && <Text style={styles.labelStyle}>{props.label}</Text>}

      <DropDownPicker
        open={open}
        setOpen={setOpen}
        onValueChange={onValueChange.bind(this)}
        onSelectItem={({ value }) => {
          props.onValueChange(value, props.id);
        }}
        {...props}
        props={{
          style: [
            styles.pickerContainer,
            { borderColor: open ? Colors.blue : Colors.white },
          ],
        }}
      />
    </>
  );
}

Picker.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },

  pickerContainer: {
    flexDirection: "row",
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: Colors.white,
    alignSelf: "stretch",
    borderRadius: 10,
    borderWidth: 2,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  labelStyle: {
    fontWeight: "400",
    fontSize: 14,
    color: Colors.grey,
    lineHeight: 17,
    paddingBottom: 5,
  },
});
