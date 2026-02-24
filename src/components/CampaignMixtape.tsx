"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Track {
  title: string;
  artist: string;
  src: string;
}

const TRACKS: Track[] = [
  { title: "Amazing Plan", artist: "Kevin MacLeod", src: "/audio/mixtape/gospel-praise.mp3" },
  { title: "Smooth Lovin", artist: "Kevin MacLeod", src: "/audio/mixtape/smooth-jazz.mp3" },
  { title: "Funkorama", artist: "Kevin MacLeod", src: "/audio/mixtape/soul-groove.mp3" },
  { title: "Laid Back Guitars", artist: "Kevin MacLeod", src: "/audio/mixtape/jazz-piano.mp3" },
  { title: "Virtutes Instrumenti", artist: "Kevin MacLeod", src: "/audio/mixtape/soulful-vibes.mp3" },
  { title: "Groove Grove", artist: "Kevin MacLeod", src: "/audio/mixtape/uplifting-brass.mp3" },
];

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function CampaignMixtape() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const track = TRACKS[trackIndex] || TRACKS[0];

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audio.volume = volume;
    audioRef.current = audio;

    // Restore preferences from localStorage
    try {
      const saved = localStorage.getItem("rcc4judge-mixtape");
      if (saved) {
        const prefs = JSON.parse(saved);
        if (typeof prefs.volume === "number") {
          audio.volume = prefs.volume;
          setVolume(prefs.volume);
        }
        if (typeof prefs.trackIndex === "number" && prefs.trackIndex < TRACKS.length) {
          setTrackIndex(prefs.trackIndex);
        }
        if (typeof prefs.isMuted === "boolean") {
          audio.muted = prefs.isMuted;
          setIsMuted(prefs.isMuted);
        }
      }
    } catch {}

    return () => {
      audio.pause();
      audio.src = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update audio source when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = isPlaying;
    audio.src = track.src;
    audio.load();

    if (wasPlaying) {
      audio.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  // Attach audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setTrackIndex((prev) => (prev + 1) % TRACKS.length);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "rcc4judge-mixtape",
        JSON.stringify({ volume, trackIndex, isMuted })
      );
    } catch {}
  }, [volume, trackIndex, isMuted]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  const nextTrack = useCallback(() => {
    setTrackIndex((prev) => (prev + 1) % TRACKS.length);
  }, []);

  const prevTrack = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      setTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    }
  }, []);

  const handleVolumeChange = useCallback((newVol: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const clamped = Math.max(0, Math.min(1, newVol));
    audio.volume = clamped;
    setVolume(clamped);
    if (clamped > 0 && isMuted) {
      audio.muted = false;
      setIsMuted(false);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const seekTo = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * duration;
  }, [duration]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Dismissed state — show mini music note button
  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-[68px] right-4 lg:bottom-4 z-40 w-12 h-12 bg-forest-dark/90 backdrop-blur-sm text-amber rounded-full shadow-lg flex items-center justify-center hover:bg-forest hover:scale-105 transition-all"
        aria-label="Open Campaign Mixtape"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </button>
    );
  }

  return (
    <div
      className={`fixed left-0 right-0 z-40 bottom-[60px] lg:bottom-0 transition-all duration-300 ${
        isExpanded ? "" : ""
      }`}
    >
      <div className="bg-forest-dark/95 backdrop-blur-sm border-t border-white/10">
        {/* Expanded view */}
        {isExpanded ? (
          <div className="mx-auto max-w-7xl px-4 py-2.5">
            {/* Desktop layout */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Label */}
              <p className="text-sage text-[9px] font-body font-bold tracking-[0.2em] uppercase shrink-0 w-[100px]">
                Campaign<br />Mixtape
              </p>

              {/* Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button onClick={prevTrack} className="p-1.5 text-cream/60 hover:text-cream transition-colors" aria-label="Previous track">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  </svg>
                </button>
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 bg-amber rounded-full flex items-center justify-center text-white hover:bg-amber-dark transition-colors shrink-0"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <button onClick={nextTrack} className="p-1.5 text-cream/60 hover:text-cream transition-colors" aria-label="Next track">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </button>
              </div>

              {/* Track info */}
              <div className="shrink-0 min-w-[140px] max-w-[180px]">
                <p className="text-cream text-sm font-body font-semibold truncate">{track.title}</p>
                <p className="text-cream/50 text-xs font-body truncate">{track.artist}</p>
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <span className="text-cream/50 text-xs font-body tabular-nums w-[36px] text-right shrink-0">
                  {formatTime(currentTime)}
                </span>
                <div
                  ref={progressRef}
                  onClick={seekTo}
                  className="flex-1 h-1.5 bg-white/15 rounded-full cursor-pointer group relative"
                >
                  <div
                    className="h-full bg-amber rounded-full relative transition-[width] duration-100"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-cream/50 text-xs font-body tabular-nums w-[36px] shrink-0">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={toggleMute} className="p-1 text-cream/60 hover:text-cream transition-colors" aria-label={isMuted ? "Unmute" : "Mute"}>
                  {isMuted || volume === 0 ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : volume < 0.5 ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-20 h-1 accent-amber cursor-pointer"
                  aria-label="Volume"
                />
              </div>

              {/* Dismiss */}
              <button
                onClick={() => setIsDismissed(true)}
                className="p-1.5 text-cream/30 hover:text-cream/60 transition-colors shrink-0"
                aria-label="Minimize player"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden">
              {/* Top row: track info + progress */}
              <div className="flex items-center gap-3 mb-2">
                <p className="text-sage text-[8px] font-body font-bold tracking-[0.15em] uppercase shrink-0">
                  Mixtape
                </p>
                <p className="text-cream text-xs font-body font-semibold truncate flex-1">{track.title}</p>
                <span className="text-cream/40 text-[10px] font-body tabular-nums shrink-0">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-1 text-cream/30 hover:text-cream/60 transition-colors shrink-0"
                  aria-label="Minimize"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Progress bar */}
              <div
                ref={progressRef}
                onClick={seekTo}
                className="w-full h-1 bg-white/15 rounded-full cursor-pointer mb-2"
              >
                <div
                  className="h-full bg-amber rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Bottom row: controls */}
              <div className="flex items-center justify-center gap-6">
                <button onClick={prevTrack} className="p-1 text-cream/60 hover:text-cream transition-colors" aria-label="Previous">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  </svg>
                </button>
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-white hover:bg-amber-dark transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <button onClick={nextTrack} className="p-1 text-cream/60 hover:text-cream transition-colors" aria-label="Next">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </button>
                <button onClick={toggleMute} className="p-1 text-cream/60 hover:text-cream transition-colors" aria-label={isMuted ? "Unmute" : "Mute"}>
                  {isMuted || volume === 0 ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Collapsed view */
          <div className="mx-auto max-w-7xl px-4 py-2">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-8 h-8 bg-amber rounded-full flex items-center justify-center text-white shrink-0"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              <p className="text-cream text-xs font-body truncate flex-1">{track.title}</p>
              <button
                onClick={() => setIsExpanded(true)}
                className="p-1 text-cream/40 hover:text-cream/60"
                aria-label="Expand player"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
