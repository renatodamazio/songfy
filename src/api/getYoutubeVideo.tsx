const getYoutubeVideo = (param: string) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&q=${param}`
  )
    .then((json) => json.json())
    .then((resp) => console.log(resp));
};

export default getYoutubeVideo;
