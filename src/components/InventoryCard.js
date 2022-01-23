import * as React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "../utils/Colors";
import { SCREEN_HEIGHT } from "../utils/Constants";
import { currencyformat } from "../utils/Functions";

export default function InventoryCard({
  item: { photo, name, purchasePrice, id },
}) {
  const { container, imageStyle, bottomView, nameStyle, priceStyle } = styles;

  return (
    <View key={id} style={container}>
      <ImageBackground style={imageStyle} source={{ uri: photo }}>
        <View style={bottomView}>
          <Text style={nameStyle}>{name}</Text>
          <Text style={priceStyle}>{currencyformat(purchasePrice)}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

InventoryCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    purchasePrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    id: PropTypes.number.isRequired,
  }),
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    margin: 8,
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderWidth: 0,

    elevation: 8,
  },

  imageStyle: {
    height: SCREEN_HEIGHT * 0.32,
  },

  bottomView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.white,
    width: "100%",
    padding: 20,
  },

  nameStyle: {
    fontWeight: "400",
    fontSize: 19,
    lineHeight: 26,
    color: Colors.grey,
  },

  priceStyle: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    color: Colors.light_grey,
  },
});
