import trackOne from './songs/son1.mp3';
import trackTwo from './songs/son2.mp3';
import trackThree from './songs/son3.mp3';
import coverArtOne from './../../../../assets/img/blackNWhiteAlbum.jpeg';
import coverArtTwo from './../../../../assets/img/neonAlbum.jpeg';
import coverArtThree from './../../../../assets/img/album.jpg';
import { Playlist } from '../audioplayer/types';

const playlist: Playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      title: 'Son 1',
      artist: 'So',
      coverArtSrc: coverArtOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      title: 'Son 2',
      artist: 'So',
      coverArtSrc: coverArtTwo,
    },
  },
  {
    audioSrc: trackThree,
    metadata: {
      title: 'Son 3',
      artist: 'So',
      coverArtSrc: coverArtThree,
    },
  },
];

export default playlist;
