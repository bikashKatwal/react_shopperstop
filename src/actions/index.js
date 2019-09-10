export const addGroceryById = (id) => {
    return {
        type: 'ADD_GROCERY',
        payload: id
    }
};

export const removeGroceryById = (id) => {
    return {
        type: 'REMOVE_GROCERY',
        payload: id
    }
};


export const addPocketMoneyById = (id) => {
    return {
        type: 'ADD_POCKET_MONEY',
        payload: id
    }
};

export const removePocketMoneyById = (id) => {
    return {
        type: 'REMOVE_POCKET_MONEY',
        payload: id
    }
};
