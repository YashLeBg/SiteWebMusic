type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="flex mb-5">
        {coverArtSrc !== "src/assets/img/blackNWhiteAlbum.jpeg" && (
          <img
            className="drop-shadow-lg rounded-sm m-1"
            width={40}
            height={40}
            src={"src/assets/img/blackNWhiteAlbum.jpeg"}
          />
        )}
        {coverArtSrc !== "src/assets/img/neonAlbum.jpeg" && (
          <img
            className="drop-shadow-lg rounded-sm m-1"
            width={40}
            height={40}
            src={"src/assets/img/neonAlbum.jpeg"}
          />
        )}
        {coverArtSrc !== "src/assets/img/album.jpg" && (
          <img
            className="drop-shadow-lg rounded-sm m-1"
            width={40}
            height={40}
            src={"src/assets/img/album.jpg"}
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
