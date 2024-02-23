import React, { useEffect, useRef, useState } from "react";
import albumImg from "./../../../assets/img/blackNWhiteAlbum.jpeg";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { RxReload } from "react-icons/rx";

import "./Mojo.css";

interface SongProps {
  title: string;
  audioUrl: string;
}

let prevAudio: HTMLAudioElement | null = null;

const Song: React.FC<SongProps> = ({ title, audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true); // Mettre à jour l'état de lecture
      } else {
        audioRef.current.pause();
        setIsPlaying(false); // Mettre à jour l'état de lecture
      }
    }
  };

  useEffect(() => {
    // Pause la musique précédente lorsque cette musique est lancée
    if (prevAudio && prevAudio !== audioRef.current) {
      prevAudio.pause();
    }

    // Met à jour la référence prevAudio
    prevAudio = audioRef.current;

    const audioElement = audioRef.current;

    const handleEnded = () => {
      // Lorsque la lecture de la chanson se termine, arrêtez la lecture et réinitialisez l'état de lecture
      setIsPlaying(false);
    };

    // Ajouter un écouteur d'événement pour gérer la fin de la chanson
    audioElement?.addEventListener("ended", handleEnded);

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      audioElement?.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div>
      <h3 className="text-black text-center mt-2">{title}</h3>
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
          className="bg-black hover:bg-gray-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-1 mt-2"
          onClick={handleTogglePlay}
        >
          {/* Utiliser l'état local pour afficher l'icône de lecture/pause */}
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

interface MusicPlayerProps {
  onNext: () => void;
  onPrevious: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ onNext, onPrevious }) => {
  const [playPause, setPlayPause] = useState(<IoPlayOutline />);

  const handlePlayPause = () => {
    if (!prevAudio) {
      const firstAudio = document.querySelector("audio") as HTMLAudioElement;
      if (firstAudio) {
        prevAudio = firstAudio;
        firstAudio.play();
        setPlayPause(<IoPauseOutline />);
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

  const handleReplay = () => {
    if (prevAudio) {
      prevAudio.currentTime = 0;
      prevAudio.play();
    }
  };

  const handleNextClick = () => {
    onNext();
  };

  const handlePreviousClick = () => {
    onPrevious();
  };

  return (
    <div className="music-player fixed bottom-0 left-0 right-0 bg-black p-4">
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <button className="text-white" onClick={handlePreviousClick}>
            <RxTrackPrevious />
          </button>
          <button className="text-white" onClick={handleNextClick}>
            <RxTrackNext />
          </button>
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

const Mojo: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // État pour suivre l'index de la chanson en cours de lecture

  const handleNext = () => {
    // Vérifier si la chanson suivante existe
    if (currentSongIndex < songsData.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1); // Mettre à jour l'index de la chanson
      console.log(currentSongIndex);
    } else {
      setCurrentSongIndex(0); // Revenir à la première chanson si c'est la dernière chanson
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1); // Mettre à jour l'index pour la chanson précédente
    } else {
      setCurrentSongIndex(songsData.length - 1); // Si c'est la première chanson, passer à la dernière chanson
    }
  };

  return (
    <>
      <div className="songs-container flex flex-wrap">
        {songsData.map((song, index) => (
          <Song key={index} title={song.title} audioUrl={song.audioUrl} />
        ))}
      </div>
      <MusicPlayer onNext={handleNext} onPrevious={handlePrevious} />
    </>
  );
};

export default Mojo;
