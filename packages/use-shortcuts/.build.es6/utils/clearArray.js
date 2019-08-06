export const clearArray = (a) => {
    if (!a) {
        return;
    }
    while (a.length) {
        a.pop();
    }
};
