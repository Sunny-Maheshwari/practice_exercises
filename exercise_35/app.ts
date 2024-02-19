function make_album(artist, title, tracks = 0) {
    let album = { artist: artist, title: title, tracks: tracks };
    if (tracks !== 0) {
        album.tracks = tracks;
    }
    return album;
}

// Make three dictionaries representing different albums
let album1 = make_album('Talha Anjum', 'Open Letter');
let album2 = make_album('Arijit Singh', 'Raabta', 11);
let album3 = make_album('Ali Zafar', 'Jhoom');

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
