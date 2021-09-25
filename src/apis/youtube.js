import axios from "axios";

const KEY = "AIzaSyBp-wAJKBHRaMhK8DUZ8t_4G4Ijhj2na-Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
