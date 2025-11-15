declare module 'react-player' {
  import { ComponentType } from 'react';

  export interface ReactPlayerProps {
    url: string;
    width?: string | number;
    height?: string | number;
    controls?: boolean;
    playing?: boolean;
    volume?: number;
    muted?: boolean;
    loop?: boolean;
    playbackRate?: number;
    pip?: boolean;
    light?: boolean | string;
    progressInterval?: number;
    playsinline?: boolean;
    preload?: string;
    config?: any;
    style?: React.CSSProperties;
    className?: string;
    onReady?: () => void;
    onStart?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onError?: (error: any) => void;
    onProgress?: (progress: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number; }) => void;
    onDuration?: (duration: number) => void;
    onSeek?: (seconds: number) => void;
  }

  const ReactPlayer: ComponentType<ReactPlayerProps>;
  export default ReactPlayer;
}
