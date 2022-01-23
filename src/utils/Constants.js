import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const PRICE_LIMIT = 40000;

export const INVENTORY_ITEMS = [
  {
    id: 1,
    name: "Cartier ring",
    purchasePrice: 5780,
    type: "JEWELRY",
    description: "Gift from my grandfather",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 2,
    name: "Guitar",
    purchasePrice: 850,
    type: "MUSIC_INSTRUMENT",
    photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
  },
];

export const INVENTORY_TYPES = [
  {
    label: "MUSIC_INSTRUMENT",
    value: "MUSIC_INSTRUMENT",
  },
  {
    label: "JEWELRY",
    value: "JEWELRY",
  },
  {
    label: "ELECTRONICS",
    value: "ELECTRONICS",
  },
  {
    label: "ART",
    value: "ART",
  },
];
