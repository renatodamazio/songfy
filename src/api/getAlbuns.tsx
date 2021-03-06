export default function getAlbuns(query:string):object {
    const url: string = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${query}&api_key=${process.env.REACT_APP_LAST_KEY}&limit=5&format=json`;
    const getAlbum = async () => {
        return await fetch(url)
          .then((json) => json.json())
          .then(({ topalbums }) => topalbums)
          .catch((err) => new Error(err));
      };
    
      return getAlbum();
}