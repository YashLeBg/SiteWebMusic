import ReactPlayer from "react-player";
import './Launch.css';

function Launch() {

  const video = "https://www.youtube.com/watch?v=gDXhFrYuZ7I";

  return (
    <div className="player-wrapper">
      <ReactPlayer
          className='react-player'
          url={video}
          playing
          width='100%'
          height='100%'
        />
    </div>
  );
}

export default Launch;
