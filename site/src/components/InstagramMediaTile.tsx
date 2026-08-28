"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import InstagramGlyph from "@/components/icons/InstagramGlyph";

type InstagramMediaTileProps = {
  type: "image" | "video";
  src: string;
  alt: string;
  href: string;
};

export default function InstagramMediaTile({ type, src, alt, href }: InstagramMediaTileProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (type !== "video" || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasLoaded(true);
      },
      { rootMargin: "120px", threshold: 0.2 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [type]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, hasLoaded]);

  return (
    <a
      ref={containerRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring group relative block aspect-square overflow-hidden rounded-xl bg-navy-900 ring-1 ring-white/10 sm:rounded-2xl"
    >
      {type === "video" ? (
        <video
          ref={videoRef}
          src={hasLoaded ? src : undefined}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 33vw, 220px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {type === "video" ? (
        <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/55 px-2 py-1 text-[0.6rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
          <InstagramGlyph className="h-3 w-3" aria-hidden="true" />
          Reels
        </span>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/0 to-navy-950/0 opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <InstagramGlyph className="h-6 w-6 text-white drop-shadow" aria-hidden="true" />
      </div>
    </a>
  );
}
