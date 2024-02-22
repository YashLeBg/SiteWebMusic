import React, { useRef, useState } from "react";
import albumImg from "./../../../assets/img/blackNWhiteAlbum.jpeg";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import './Mojo.css'

interface SongProps {
  title: string;
  audioUrl: string;
}

let prevAudio: HTMLAudioElement | null = null;

const Song: React.FC<SongProps> = ({ title, audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (prevAudio && prevAudio !== audioRef.current) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
      if (audioRef.current.paused) {
        audioRef.current.play();
      }
      prevAudio = audioRef.current;
      if (!prevAudio.paused) {
        prevAudio.currentTime = 0;
      }
    }
  };

  return (
    <div>
      <div
        className="song-container rounded box-border h-64 w-64 border-4"
        onClick={handlePlayAudio}
      >
        <img
          src={albumImg}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center mt-2">{title}</p>
      <audio ref={audioRef} className="w-full mt-2">
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

const songsData: SongProps[] = [
  { title: "Song 1", audioUrl: "src/assets/songs/son1.mp3" },
  { title: "Song 2", audioUrl: "src/assets/songs/son2.mp3" },
  { title: "Song 3", audioUrl: "src/assets/songs/son3.mp3" },
  { title: "Song 4", audioUrl: "src/assets/songs/son4.mp3" },
  { title: "Song 5", audioUrl: "src/assets/songs/son5.mp3" },
  { title: "Song 6", audioUrl: "src/assets/songs/son6.mp3" },
];

const MusicPlayer: React.FC = () => {
  const [playPause, setPlayPause] = useState(<IoPlayOutline />);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (!prevAudio) {
      const firstAudio = document.querySelector("audio") as HTMLAudioElement;
      if (firstAudio) {
        prevAudio = firstAudio;
        firstAudio.play();
        setPlayPause(<IoPauseOutline />);
        firstAudio.addEventListener("timeupdate", updateProgress);
      }
    } else {
      if (prevAudio.paused) {
        prevAudio.play();
        setPlayPause(<IoPauseOutline />);
      } else {
        prevAudio.pause();
        setPlayPause(<IoPlayOutline />);
      }
    }
  };

  const updateProgress = () => {
    if (prevAudio) {
      const { currentTime, duration } = prevAudio;
      setProgress((currentTime / duration) * 100);
    }
  };

  return (
    <div className="music-player fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-center items-center">
      <button className="text-white">
        <RxTrackPrevious />
      </button>
      <button
        onClick={handlePlayPause}
        className="text-white flex items-center space-x-2"
      >
        {playPause}
      </button>
      <button className="text-white">
        <RxTrackNext />
      </button>
      <progress value={progress} max="100" className="w-full mt-2" />
    </div>
  );
};

const Mojo: React.FC = () => {
  return (
    <>
      <div className="songs-container flex flex-wrap">
        {songsData.map((song, index) => (
          <Song key={index} title={song.title} audioUrl={song.audioUrl} />
        ))}
      </div>
      <MusicPlayer />
    </>
  );
};

export default Mojo;
