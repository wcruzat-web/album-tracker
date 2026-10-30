import { usePlayer } from "../context/usePlayer.js";
import { bigArt } from "../services/itunes.js";
export default function Player() {
  const {
    current,
    isPlaying,
    progress,
    toggle,
    next,
    prev,
    seek,
    hasNext,
    hasPrev,
    playbackError,
  } = usePlayer();
  if (!current) return null;
  return (
    <footer className="player">
      <img src={bigArt(current.artworkUrl100, 120)} alt="" />
      <div className="now">
        <strong>{current.trackName}</strong>
        <span>{current.artistName}</span>
      </div>
      <div className="controls">
        <button
          onClick={prev}
          disabled={!hasPrev}
          type="button"
          aria-label="Previous track"
        >
          ⏮
        </button>

        <button
          className="main"
          onClick={toggle}
          type="button"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <button
          onClick={next}
          disabled={!hasNext}
          type="button"
          aria-label="Next track"
        >
          ⏭
        </button>
      </div>
      <input
        className="seek"
        type="range"
        min="0"
        max="1000"
        value={Math.round(progress * 1000)}
        onChange={(e) => seek(e.target.value / 1000)}
        aria-label="Seek"
      />
      {playbackError && <span className="notice error">{playbackError}</span>}
    </footer>
  );
}
