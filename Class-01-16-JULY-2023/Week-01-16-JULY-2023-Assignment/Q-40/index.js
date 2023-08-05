"use strict";
function make_album(artist, albumTitle, numTracks) {
    const album = {
        artist: artist,
        title: albumTitle
    };
    if (numTracks) {
        album.tracks = numTracks;
    }
    return album;
}
let album1 = make_album("Rahat Fateh Ali Khan", "Back 2 Love");
let album2 = make_album("Ali Zafar", "Huqa Pani");
let album3 = make_album("Atif Aslam", "Tera Hone Laga Hoon", 8);
console.log(album1);
console.log(album2);
console.log(album3);
