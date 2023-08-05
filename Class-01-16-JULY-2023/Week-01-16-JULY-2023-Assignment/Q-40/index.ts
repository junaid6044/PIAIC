interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, albumTitle: string, numTracks?: number): Album {
    const album: Album = {
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
  