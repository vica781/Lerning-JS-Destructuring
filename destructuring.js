/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
let [John, Mary, Joe] = ages;
console.log(John, Mary, Joe);

// Destructuring objects
let jobs = {
    Mike: "designer",
    Jill: "developer",
    Alicia: "accountant",
};

let { Mike, Jill, Alicia } = jobs;
console.log(Mike, Jill, Alicia);

// Destructuring subsets
let languages = ["English", "French", "Spanish", "German", "Japanise"];
let [JohnNative, JohnSecondary] = languages;
console.log(JohnNative, JohnSecondary);

let [, , MaryNative, MarySecondary] = languages;
console.log(MaryNative, MarySecondary);

let languages2 = {
    firstLanguage: "English",
    secondLanguage: "French",
    thirdLanguage: "German",
    fourthLanguage: "Japanise"
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "bananana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    Brian: "Pizza",
    Anna: "Pasta",
    Sarah: "Vegetarian",
    Andrea: "Steak"
};
let { Brian, Anna, ...rest } = favoriteFoods;
console.log(Brian);
console.log(Anna);
console.log(rest);
