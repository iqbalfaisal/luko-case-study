import { Alert } from "react-native";

export const currencyformat = (price) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
};

export const renderError = (error) => {
  return Alert.alert("Error", error, [
    {
      text: "Cancel",
      onPress: () => {},
      cancelable: true,
      style: "cancel",
    },
    {
      text: "Ok",
      onPress: () => {},
    },
  ]);
};
