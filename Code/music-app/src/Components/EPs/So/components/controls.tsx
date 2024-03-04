type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onRepeatClick: () => void;
  onShuffleClick: () => void;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}: ControlsProps) => {
  return (
    <div className="flex flex-row mt-4">
      <ImageButton
        src={shuffle ? 'src/Components/EPs/So/assets/icons/ic_shuffle.svg' : 'src/Components/EPs/So/assets/icons/ic_shuffle_disabled.svg'}
        onClick={onShuffleClick}
      />
      <ImageButton src={'src/Components/EPs/So/assets/icons/ic_prev.svg'} onClick={onPrevClick} />
      <ImageButton
        className="mr-2 ml-2"
        src={isPlaying ? 'src/Components/EPs/So/assets/icons/ic_pause.svg' : 'src/Components/EPs/So/assets/icons/ic_play.svg'}
        onClick={onPlayClick}
      />
      <ImageButton src={'src/Components/EPs/So/assets/icons/ic_next.svg'} onClick={onNextClick} />
      <ImageButton
        src={repeat ? 'src/Components/EPs/So/assets/icons/ic_repeat.svg' : 'src/Components/EPs/So/assets/icons/ic_repeat_disabled.svg'}
        onClick={onRepeatClick}
      />
    </div>
  );
};

export default Controls;

type ImageButtonProps = {
  src: string;
  onClick: () => void;
  className?: string;
};

const ImageButton = ({ onClick, src, className }: ImageButtonProps) => {
  const buttonSize = 65;
  return (
    <button onClick={onClick}>
      <img
        src={src}
        width={buttonSize}
        height={buttonSize}
        className={`drop-shadow-lg ${className ?? ''}`}
      />
    </button>
  );
};
