function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

let magicians = ['Harry Houdini', 'Ricky Jay', 'Shin Lim', 'Roger Lapin'];

let great_magicians = make_great([...magicians]);

console.log("Original magicians:");
show_magicians(magicians);

console.log("\nGreat magicians:");
show_magicians(great_magicians);
