import { Playlist } from '../audioplayer/types';

const playlist: Playlist = [
  {
    audioSrc: 'src/assets/songs/songs-so/son1.mp3',
    metadata: {
      title: 'Son 1',
      artist: 'So',
      coverArtSrc: 'src/assets/img/blackNWhiteAlbum.jpeg',
    },
  },
  {
    audioSrc: 'src/assets/songs/songs-so/son2.mp3',
    metadata: {
      title: 'Son 2',
      artist: 'So',
      coverArtSrc: 'src/assets/img/neonAlbum.jpeg',
    },
  },
  {
    audioSrc: 'src/assets/songs/songs-so/son3.mp3',
    metadata: {
      title: 'Son 3',
      artist: 'So',
      coverArtSrc: 'src/assets/img/album.jpg',
    },
  },
];

export default playlist;
