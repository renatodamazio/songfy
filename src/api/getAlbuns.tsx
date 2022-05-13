export default function getAlbuns(query:string):object {
    const url: string = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${query}&api_key=${process.env.REACT_APP_LAST_KEY}&limit=10&format=json`;
    const getAlbum = async () => {
        return await fetch(url)
          .then((json) => json.json())
          .then(({ topalbums }) => console.log(JSON.stringify(topalbums)))
          .catch((err) => new Error(err));
      };
    
      return getAlbum();
}

export const getMockAlbuns = () => {
    const json = require("./mockAlbum.json");
    return json;
}