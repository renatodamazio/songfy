export const getYoutubeVideoMock = (param: string) => {
  const json = require("../mocks/youtubeVideoResults.json");
  return json;
}

const getYoutubeVideo = (param: string) => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&q=${param}`
  )
    .then((json) => json.json())
    .then((resp) => {
      console.log(JSON.stringify(resp));
      return resp;
    });
};

export default getYoutubeVideo;
