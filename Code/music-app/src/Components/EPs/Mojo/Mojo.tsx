import React, { useEffect, useRef, useState } from "react";
import albumImg from "./../../../assets/img/blackNWhiteAlbum.jpeg";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { RxReload } from "react-icons/rx";
import { BiArrowBack } from "react-icons/bi";

import "./Mojo.css";
import { Link } from "react-router-dom";

const Mojo: React.FC = () => {
  interface SongProps {
    title: string;
    audioUrl: string;
  }

  const Song: React.FC<SongProps> = ({ title, audioUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleTogglePlay = () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          if (prevAudio && prevAudio !== audioRef.current) {
            prevAudio.currentTime = 0;
            prevAudio.pause();
          }
          audioRef.current.play();
          setIsPlaying(true);
          prevAudio = audioRef.current;
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    useEffect(() => {
      const audioElement = audioRef.current;

      const handleEnded = () => {
        setIsPlaying(false);
      };

      const handlePlaying = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      audioElement?.addEventListener("ended", handleEnded);
      audioElement?.addEventListener("playing", handlePlaying);
      audioElement?.addEventListener("pause", handlePause);

      return () => {
        audioElement?.removeEventListener("ended", handleEnded);
        audioElement?.removeEventListener("playing", handlePlaying);
        audioElement?.removeEventListener("pause", handlePause);
      };
    }, []);

    return (
      <div>
        <h3 className="text-black rounded bg-gray-300 text-center mt-2">
          {title}
        </h3>
        <div
          className="song-container rounded box-border h-64 w-64 border-4"
          onClick={handleTogglePlay}
        >
          <img
            src={albumImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="bg-black hover:bg-gray-500 active:scale-95 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-1 mt-2"
            onClick={handleTogglePlay}
          >
            {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
          </button>
          <audio ref={audioRef} className="w-full mt-2">
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
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
    { title: "Song 7", audioUrl: "src/assets/songs/son6.mp3" },
  ];

  let prevAudio: HTMLAudioElement | null = null;

  const MusicPlayer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const duree = prevAudio?.duration || 0;

    const handleReplay = () => {
      if (prevAudio) {
        prevAudio.currentTime = 0;
        prevAudio.play();
        setIsPlaying(true);
      }
    };

    const handlePlaying = () => {
      if (prevAudio) {
        if (prevAudio.paused) {
          prevAudio.play();
          setIsPlaying(true);
        } else {
          prevAudio.pause();
          setIsPlaying(false);
        }
      }
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(prevAudio?.currentTime || 0);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const audioElement = prevAudio;

      const handleEnded = () => {
        setIsPlaying(false);
      };

      const handlePlaying = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      audioElement?.addEventListener("ended", handleEnded);
      audioElement?.addEventListener("playing", handlePlaying);
      audioElement?.addEventListener("pause", handlePause);

      return () => {
        audioElement?.removeEventListener("ended", handleEnded);
        audioElement?.removeEventListener("playing", handlePlaying);
        audioElement?.removeEventListener("pause", handlePause);
      };
    }, []);

    return (
      <div className="music-player fixed bottom-0 left-0 right-0 bg-black p-4">
        <div className="flex justify-between">
          <div className="justify-start text-white" onClick={handlePlaying}>
            <button
              type="button"
              className="text-black bg-white-700 hover:bg-gray-400  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-white"
            >
              {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
            </button>
          </div>
          <div className="text-white flex flex-row justify-center items-center mt-2">
            <input
              type="range"
              min="0"
              max={prevAudio?.duration || 0}
              value={currentTime}
              onChange={(e) => {
                if (prevAudio) prevAudio.currentTime = Number(e.target.value);
              }}
            />{" "}
            &nbsp;
            <span>
              {formatTime(currentTime)} / {formatTime(duree)}
            </span>
          </div>
          <div className="justify-end text-white" onClick={handleReplay}>
            <button
              type="button"
              className="text-black bg-white-700 hover:bg-gray-400  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-white"
            >
              <RxReload />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Link className="btn-back" to="/accueil">
          <button className="text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <div className="songs-container flex flex-wrap pb-20 pt-5">
        {songsData.map((song, index) => (
          <Song key={index} title={song.title} audioUrl={song.audioUrl} />
        ))}
      </div>
      <MusicPlayer />
    </>
  );
};

// Fonction utilitaire pour formater le temps en minutes:secondes
function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${formattedSeconds}`;
}

export default Mojo;
