hideAll(".view");
show("#main");





function $ (selector, all) {
    var list = document.querySelectorAll(selector);
    return all ? list : list[0];
}

function forEach (context, func) {
    [].forEach.call(context, func);
}

function show (viewId) {
    var view = $(viewId);
    view.removeAttribute("hidden");
}

function hideAll (selector) {
    var list = $(selector, true);
    forEach(list, (element) => {
        element.setAttribute("hidden", "hidden");
});
}



