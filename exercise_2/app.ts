let personName = "sunny maheshwari"

//lowercase
console.log("Lowercase:", personName.toLowerCase())

//uppercase
console.log("Uppercase:", personName.toUpperCase())

const newName = personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")

//uppercase
console.log("Title Case:", newName)