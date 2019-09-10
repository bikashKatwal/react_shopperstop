import groceryItemsList from "../data/groceryItems";

export const addToBag = (id) => {
    let item = groceryItemsList.find((item) => item.id === id);
    return item;
};

export const removeFromBag = (state, id) => {
    let item = state.filter((item) => item.id!== id);
    return item;
};
