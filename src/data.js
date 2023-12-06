import userInfo from "./assets/Bitmap.svg";
import noImage from "./assets/No_image_available.svg.svg";

export const data = [
  {
    id: 1,
    name: "The Octocat",
    joinDay: 25,
    joinMonth: "Jan",
    joinYear: 2011,
    biophoto: userInfo,
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    repos: 8,
    followers: 3938,
    following: 9,
    livegeo: "San Francisco",
    twitter: "",
    workplace: "@github",
    linkbio: "https://github.blog",
  },
  {
    id: 2,
    name: "The Sonocat",
    joinDay: 7,
    joinMonth: "June",
    joinYear: 2012,
    biophoto: noImage,
    bio: "",
    repos: 8,
    followers: 3938,
    following: 9,
    livegeo: "San Francisco",
    twitter: "https://twitter.blog",
    workplace: "@github",
    linkbio: "https://github.blog",
  },
];
