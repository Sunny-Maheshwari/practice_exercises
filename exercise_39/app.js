function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item, " \n"));
    }
    console.log("\n Sandwich is ready!");
}
// Call the function with different numbers of arguments to order sandwiches
make_sandwich('Turkey', 'Cheese', 'Lettuce');
make_sandwich('2 slices whole-grain bread', '3 tablespoons hummus', '¼ avocado, mashed', '½ cup mixed salad greens', '¼ medium red bell pepper, sliced', '¼ cup sliced cucumber', '¼ cup shredded carrot');
make_sandwich('Peanut Butter', 'Jelly');
