var personName = "sunny maheshwari";
//lowercase
console.log("Lowercase:", personName.toLowerCase());
//uppercase
console.log("Uppercase:", personName.toUpperCase());
var newName = personName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
//uppercase
console.log("Title Case:", newName);
