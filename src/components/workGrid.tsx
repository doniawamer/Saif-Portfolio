"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectType } from "@/consts/projects";
import { ProjectModal } from "./ProjectModal";

interface WorkGridProps {
  projects: ProjectType[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <div
              key={`project-${project.id}`}
              className="group relative aspect-[16/9] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={true}
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm">{project.category}</p>
              </div>
            </div>
          ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
