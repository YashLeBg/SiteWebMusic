import album1 from "./../../../../assets/img/blackNWhiteAlbum.jpeg";
import album2 from "./../../../../assets/img/neonAlbum.jpeg";
import album3 from "./../../../../assets/img/album.jpg";

type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="flex mb-5">
        {coverArtSrc !== album1 && (
          <img
            className="drop-shadow-lg rounded-sm m-1"
            width={40}
            height={40}
            src={album1}
          />
        )}
        {coverArtSrc !== album2 && (
          <img
            className="drop-shadow-lg rounded-sm m-1"
            width={40}
            height={40}
            src={album2}
          />
        )}
        {coverArtSrc !== album3 && (
          <img
            className="drop-shadow-lg rounded-sm m-1"
            width={40}
            height={40}
            src={album3}
          />
        )}
      </div>
      <img
        className="drop-shadow-lg rounded-sm mb-10"
        width={180}
        height={180}
        src={coverArtSrc}
      />
      <span className="text-2xl drop-shadow-lg text-primary">{title}</span>
      <span className="text-base drop-shadow-lg text-primary">{artist}</span>
    </div>
  );
};

export default SongInfo;
