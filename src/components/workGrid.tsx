"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  hoverVideo?: string;
  category: string;
  synopsis: string;
  whereToWatch?: string;
  releaseDate: string;
}

interface WorkGridProps {
  projects: Project[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/work/${project.id}`}
          className="group relative aspect-video overflow-hidden"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {hoveredId === project.id && project.hoverVideo ? (
            <video
              src={project.hoverVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-opacity duration-300" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm">{project.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
