import React from "react";
import ReactAudioPlayer from "react-audio-player";
import albumNeon from "./../../../assets/img/neonAlbum.jpeg";

interface SongProps {
  title: string;
  audioUrl: string;
}

const songsData: SongProps[] = [
  {
    title: "Song 1",
    audioUrl: "src/assets/songs/son1.mp3",
  },
  {
    title: "Song 2",
    audioUrl: "src/assets/songs/son2.mp3",
  },
  {
    title: "Song 3",
    audioUrl: "src/assets/songs/son3.mp3",
  },
  {
    title: "Song 4",
    audioUrl: "src/assets/songs/son4.mp3",
  },
  {
    title: "Song 5",
    audioUrl: "src/assets/songs/son5.mp3",
  },
  {
    title: "Song 6",
    audioUrl: "src/assets/songs/son6.mp3",
  },
  {
    title: "Song 7",
    audioUrl: "src/assets/songs/son6.mp3",
  },
  {
    title: "Song 7",
    audioUrl: "src/assets/songs/son6.mp3",
  },
];

const SongCard: React.FC<SongProps> = ({ title, audioUrl }) => {

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-8 backdrop-blur-sm  rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center item-center bg-black bg-opacity-50 group-hover:flex `}
        ></div>
        <img
          src={albumNeon}
          alt={title}
          className="w-full h-full object-cover"
        />
        <ReactAudioPlayer
          src={audioUrl}
          autoPlay={false}
          controls
          className="hidden"/>
      </div>
    </div>
  );
};

function Ocho() {
  return (
    <div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songsData.map((song, index) => (
          <SongCard key={index} title={song.title} audioUrl={song.audioUrl} />
        ))}
      </div>
    </div>
  );
}

export default Ocho;
