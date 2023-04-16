let handleTitle = (title) => {
    let title2 = title.split(' ');
    title2 = `${title2[0]} ${title2[1]}`;
    return title2;
};

let IsInCart = (state, id) => {
    let result = !!state.selectedItems.find((i) => i.id === id);
    return result;
};

let quantityCount = (state, id) => {
    let index = state.selectedItems.findIndex(i => i.id === id)
    let result = (index === -1) ? false : state.selectedItems[index].qty;
    return result;
}

export { handleTitle, IsInCart, quantityCount };
