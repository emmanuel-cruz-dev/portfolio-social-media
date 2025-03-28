import Song1 from "../assets/songs/song1.m4a";
import Song2 from "../assets/songs/song2.m4a";
import Song3 from "../assets/songs/song3.mp3";
import Song4 from "../assets/songs/song4.m4a";
import Song5 from "../assets/songs/song5.m4a";
import Song6 from "../assets/songs/song6.m4a";
import Song7 from "../assets/songs/song7.m4a";

import CampAlbum from "../assets/images/camp.jpg";
import TheResistanceAlbum from "../assets/images/the-resistance.jpg";
import SuperunknownAlbum from "../assets/images/superunknown.jpg";
import TalkToMeAlbum from "../assets/images/talk-to-me.jpg";
import ElCaminoAlbum from "../assets/images/el-camino.jpg";
import NewDawn from "../assets/images/new-dawn.jpg";
import SheWantsRevenge from "../assets/images/sheWantsRevenge.jpg";

export const musicList = [
  {
    title: "Les",
    artist: "Childish Gambino",
    src: `${Song1}`,
    cover: `${CampAlbum}`,
    album: "Camp",
  },
  {
    title: "Undisclosed Desires",
    artist: "Muse",
    src: `${Song2}`,
    cover: `${TheResistanceAlbum}`,
    album: "The Resistance",
  },
  {
    title: "Portrait #1",
    artist: "Twelve Foot Ninja",
    src: `${Song3}`,
    cover: `${NewDawn}`,
    album: "New Dawn",
  },
  {
    title: "The Day I Tried To Live",
    artist: "Soundgarden",
    src: `${Song4}`,
    cover: `${SuperunknownAlbum}`,
    album: "Superunknown",
  },
  {
    title: "Le Monde",
    artist: "Richard Carter",
    src: `${Song5}`,
    cover: `${TalkToMeAlbum}`,
    album: "Talk to Me",
  },
  {
    title: "Lonely Boy",
    artist: "The Black Keys",
    src: `${Song6}`,
    cover: `${ElCaminoAlbum}`,
    album: "El Camino",
  },
  {
    title: "Tear You Apart",
    artist: "She Wants Revenge",
    src: `${Song7}`,
    cover: `${SheWantsRevenge}`,
    album: "She Wants Revenge",
  },
];
