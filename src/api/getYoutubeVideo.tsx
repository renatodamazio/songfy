const getYoutubeVideo = (param: string) => {
  return fetch(
    `${process.env.REACT_APP_YOUTUBE}?q=${param}`
  )
    .then((json) => json.json())
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.error(err))
};

export default getYoutubeVideo;
