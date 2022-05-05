export default function getAlbuns(artist:string, album: string):object {
    const url: string = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_LAST_KEY}&artist=${artist}&album=${album}&limit=1&format=json`;

    const getAlbum = async () => {
        return await fetch(url)
          .then((json) => json.json())
          .then(({ album }) => album)
          .catch((err) => new Error(err));
      };
    
      return getAlbum();
}