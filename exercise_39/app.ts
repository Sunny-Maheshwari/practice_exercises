function make_sandwich(...items){
    console.log(`\n Making a sandwich with the following items: \n`);
    for (let item of items) {
        console.log(`- ${item} \n`);
    }
    console.log(`\n Sandwich is ready!`);
}

// Call the function with different numbers of arguments to order sandwiches
make_sandwich('Turkey', 'Cheese', 'Lettuce');
make_sandwich('2 slices whole-grain bread', '3 tablespoons hummus', '¼ avocado, mashed', '½ cup mixed salad greens', '¼ medium red bell pepper, sliced', '¼ cup sliced cucumber', '¼ cup shredded carrot');
make_sandwich('Peanut Butter', 'Jelly');
