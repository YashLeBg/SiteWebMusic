import "./Ocho.css";
import { AiOutlineRollback } from "react-icons/ai";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import HeaderEP from "../HeaderEP/HeaderEP";
import { useEffect, useRef, useState } from "react";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";

function Ocho() {
  interface SongProps {
    title: string;
    audioUrl: string;
  }

  const songsData: SongProps[] = [
    { title: "Song 1", audioUrl: "src/assets/songs/songs-ocho/son1.mp3" },
    { title: "Song 2", audioUrl: "src/assets/songs/songs-ocho/son2.mp3" },
    { title: "Song 3", audioUrl: "src/assets/songs/songs-ocho/son3.mp3" },
    { title: "Song 4", audioUrl: "src/assets/songs/songs-ocho/son4.mp3" },
    { title: "Song 5", audioUrl: "src/assets/songs/songs-ocho/son5.mp3" },
    { title: "Song 6", audioUrl: "src/assets/songs/songs-ocho/son6.mp3" },
    { title: "La Flemme", audioUrl: "src/assets/songs/songs-ocho/son6.mp3" },
    { title: "Song 8", audioUrl: "src/assets/songs/songs-ocho/son6.mp3" },
  ];

  let prevAudio: HTMLAudioElement | null = null;

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
        <div className="justify-between flex flex-row items-center">
          <div className="justify-start">
            <h3 className="text-white text-xl ml-2">{title}</h3>
          </div>
          <div className="justify-end">
            <button
              onClick={handleTogglePlay}
              className="text-white text-xl scale-100 hover:scale-125 ease-in duration-100"
            >
              {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
            </button>
          </div>
        </div>
      </div>
    );
    // <audio ref={audioRef} className="w-full mt-2">
    //   <source src={audioUrl} type="audio/mpeg" />
    //   Your browser does not support the audio element.
    // </audio>;
  };

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAll(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pageOcho">
      <HeaderEP />
      <div className="flex flex-col items-center mb-2">
        <Link className="btn-back" to="/accueil">
          <button className="text-white text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <AiOutlineRollback />
          </button>
        </Link>
        <Link className="btn-prev" to="/so">
          <button className="text-white text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <GrLinkPrevious />
          </button>
        </Link>
        <Link className="btn-next" to="/mojo">
          <button className="text-white text-xl hover:text-2xl scale-100 hover:scale-175 ease-in duration-100">
            <GrLinkNext />
          </button>
        </Link>
      </div>
      <div
        className={`flex flex-col items-center pt-20 text-white slide-up-text ${
          showAll ? "show" : ""
        }`}
      >
        {songsData.map((song, index) => (
          <div key={index} className="song-wrapper">
            <Song title={song.title} audioUrl={song.audioUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ocho;
