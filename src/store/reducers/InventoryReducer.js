import { createSelector } from "reselect";
import { INVENTORY_ITEMS } from "../../utils/Constants";
import { ADD_ITEM } from "../Types";

const INITIAL_STATE = { inventory_list: INVENTORY_ITEMS };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        inventory_list: [...state.inventory_list, action.item],
      };

    default:
      return state;
  }
};

export const listSelector = (state) => state.InventoryReducer.inventory_list;

export const totalPriceSelector = createSelector(listSelector, (items) =>
  items.reduce((acc, item) => acc + item.purchasePrice, 0)
);
