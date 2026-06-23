import { useState } from 'react';
import { useSpotifyPlayer } from '../useSpotifyPlayer';
import { useLyrics } from '../useLyrics';

function Player({ token, onDeviceReady }) {
  const { player, isPaused, currentTrack, position, duration } = useSpotifyPlayer(token, onDeviceReady);
  const { lyrics, loading: lyricsLoading } = useLyrics(currentTrack);
  const [volume, setVolume] = useState(80);
  const [showLyrics, setShowLyrics] = useState(false);

  const formatTime = (ms) => {
    const secs = Math.floor(ms / 1000);
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    if (!player || !duration) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const seekMs = Math.floor(percent * duration);
    player.seek(seekMs);
  };

  const handleVolume = (e) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    player?.setVolume(val / 100);
  };

  const getCurrentLyricIndex = () => {
    if (!lyrics || lyrics.type !== 'synced') return -1;
    for (let i = lyrics.lines.length - 1; i >= 0; i--) {
      if (position >= lyrics.lines[i].ms) return i;
    }
    return -1;
  };

  const percent = duration ? (position / duration) * 100 : 0;
  const currentLyricIndex = getCurrentLyricIndex();

  return (
    <>
      {showLyrics && (
        <div className="lyrics-panel">
          <div className="lyrics-header">
            <p className="lyrics-title">{currentTrack?.name || '—'}</p>
            <button className="lyrics-close" onClick={() => setShowLyrics(false)}>✕</button>
          </div>
          <div className="lyrics-body">
            {lyricsLoading && <p className="lyrics-status">Loading lyrics...</p>}
            {!lyricsLoading && !lyrics && <p className="lyrics-status">No lyrics found.</p>}
            {!lyricsLoading && lyrics?.type === 'plain' && (
              <pre className="lyrics-plain">{lyrics.text}</pre>
            )}
            {!lyricsLoading && lyrics?.type === 'synced' && (
              <div className="lyrics-synced">
                {lyrics.lines.map((line, i) => (
                  <p
                    key={i}
                    className={`lyric-line ${i === currentLyricIndex ? 'active' : ''} ${i < currentLyricIndex ? 'past' : ''}`}
                  >
                    {line.text || '·'}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="player">
        <div className="player-left">
          {currentTrack?.album?.images?.[0]?.url && (
            <img src={currentTrack.album.images[0].url} alt="album art" className="player-album-art" />
          )}
          <div>
            <p className="player-track">{currentTrack?.name || 'No track playing'}</p>
            <p className="player-album">{currentTrack?.album?.name || '—'}</p>
          </div>
        </div>
        <div className="player-controls">
          <button className="player-btn" onClick={() => player?.previousTrack()}>⏮</button>
          <button className="player-btn play" onClick={() => player?.togglePlay()}>
            {isPaused ? '▶' : '⏸'}
          </button>
          <button className="player-btn" onClick={() => player?.nextTrack()}>⏭</button>
        </div>
        <div className="player-right">
          <span className="player-time">{formatTime(position)}</span>
          <div className="player-bar" onClick={handleSeek}>
            <div className="player-bar-fill" style={{ width: `${percent}%` }}>
              <div className="player-bar-thumb"></div>
            </div>
          </div>
          <span className="player-time">{formatTime(duration)}</span>
          <span className="volume-icon">{volume === 0 ? '🔇' : volume < 50 ? '🔉' : '🔊'}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolume}
            className="volume-slider"
          />
          <button
            className={`lyrics-btn ${showLyrics ? 'active' : ''}`}
            onClick={() => setShowLyrics(!showLyrics)}
          >
            lyrics
          </button>
        </div>
      </div>
    </>
  );
}

export default Player;