interface SearchProfile {
  query: string;
}

export default function Search(query: SearchProfile): object {
  const url: string = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query.query}&api_key=${process.env.REACT_APP_LAST_KEY}&limit=5&format=json`;

  const getArtist = async () => {
    return await fetch(url)
      .then((json) => json.json())
      .then(({ results }) => results.artistmatches)
      .catch((err) => new Error(err));
  };

  return getArtist();
}
