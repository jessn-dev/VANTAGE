"use client";
import { useEffect, forwardRef } from 'react';
import Hls from 'hls.js';

interface HlsPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
}

// NOTE: We are using "export const" here (Named Export)
export const HlsPlayer = forwardRef<HTMLVideoElement, HlsPlayerProps>(
    ({ src, className, ...props }, ref) => {

        useEffect(() => {
            // @ts-ignore - Safe cast because we know the parent owns the ref
            const video = ref?.current as HTMLVideoElement;
            if (!video) return;

            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = src;
            } else if (Hls.isSupported()) {
                const hls = new Hls({
                    capLevelToPlayerSize: true,
                    autoStartLoad: true,
                });
                hls.loadSource(src);
                hls.attachMedia(video);
            }
        }, [src, ref]);

        return (
            <video
                ref={ref}
                className={className}
                muted
                loop
                playsInline
                preload="metadata"
                {...props}
            />
        );
    }
);

HlsPlayer.displayName = "HlsPlayer";