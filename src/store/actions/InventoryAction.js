import { ADD_ITEM } from "../Types";
import { listSelector, totalPriceSelector } from "../reducers/InventoryReducer";
import { PRICE_LIMIT } from "../../utils/Constants";
import { currencyformat, renderError } from "../../utils/Functions";

export function addItem(item) {
  return (dispatch, getState) => {
    const state = getState();
    const { name, category, purchasePrice, photo } = item;

    const totalPrice = totalPriceSelector(state);
    const inventoryList = listSelector(state);
    let price = parseInt(purchasePrice, 10);

    if (
      name === "" ||
      category === "" ||
      purchasePrice === "" ||
      photo === ""
    ) {
      renderError(`Name, category, value, and photo are required`);
    } else if (totalPrice + price > PRICE_LIMIT) {
      renderError(`Out of limit: Up-to ${currencyformat(PRICE_LIMIT)}`);
    } else {
      dispatch({
        type: ADD_ITEM,
        item: { ...item, purchasePrice: price, id: inventoryList.length + 1 },
      });
    }
  };
}
