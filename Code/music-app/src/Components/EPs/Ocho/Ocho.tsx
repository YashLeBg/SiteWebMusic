import React from "react";
import ReactAudioPlayer from "react-audio-player";
import albumNeon from "./../../../assets/img/neonAlbum.jpeg";
import { MdPlayArrow, MdPause } from "react-icons/md";
import IconButton from "./ComponentsOcho/IconButton";
import { CgSpinner } from "react-icons/cg";

interface AudioPlayerProps {
  currentSong?: { title: string; src: string };
  songIndex: number;
  songCount: number;
  onNext: () => void;
  onPrev: () => void;
}

const songs: AudioPlayerProps[] = [
  {
    currentSong: { title: "Song 1", src: "src/assets/songs/son1.mp3" },
    songIndex: 0,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 2", src: "src/assets/songs/son2.mp3" },
    songIndex: 1,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 3", src: "src/assets/songs/son3.mp3" },
    songIndex: 2,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 4", src: "src/assets/songs/son4.mp3" },
    songIndex: 3,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 5", src: "src/assets/songs/son5.mp3" },
    songIndex: 4,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 6", src: "src/assets/songs/son6.mp3" },
    songIndex: 5,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 7", src: "src/assets/songs/son6.mp3" },
    songIndex: 6,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 8", src: "src/assets/songs/son6.mp3" },
    songIndex: 7,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
  {
    currentSong: { title: "Song 8", src: "src/assets/songs/son6.mp3" },
    songIndex: 8,
    songCount: 8,
    onNext: () => {},
    onPrev: () => {},
  },
];

function Ocho(props: AudioPlayerProps) {
  const { currentSong, songCount, songIndex, onNext, onPrev } = props;
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // states
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="bg-slate-900 text-slate-400 p-3 relative">
      <audio
        ref={audioRef}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={(e) => {
          setIsReady(true);
        }}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source type="audio/mpeg" src={currentSong.src} />
      </audio>
      <div className="text-center mb-1">
        <p className="text-slate-300 font-bold">
          {currentSong?.title ?? "Select a song"}
        </p>
        <p className="text-xs">Singer Name</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center mt-4">
        <div className="flex items-center gap-3 justify-self-center">
          <IconButton
            disabled={!isReady}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            size="lg"
          >
            {!isReady && currentSong ? (
              <CgSpinner size={24} className="animate-spin" />
            ) : isPlaying ? (
              <MdPause size={30} />
            ) : (
              <MdPlayArrow size={30} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Ocho;
