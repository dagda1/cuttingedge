export var clearArray = function (a) {
    if (!a) {
        return;
    }
    while (a.length) {
        a.pop();
    }
};
