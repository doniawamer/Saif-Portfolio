import { ProjectType } from "@/consts/projects"; // You might need to move the Project interface to a types file
import Image from "next/image";
import { useState } from "react";

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
}

interface CloseButtonProps {
  onClose: () => void;
  isClosing?: boolean;
}

function CloseButton({ onClose, isClosing }: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className={`absolute right-3 top-3 text-white hover:text-gray-300 
                 transition-opacity duration-300 ease-in-out
                 ${isClosing ? "opacity-0" : "opacity-100"}`}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  console.log("project", project);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with enhanced blur and fade animation */}
      <div
        className={`absolute inset-0 backdrop-blur-sm transition-all duration-300 ease-in-out
                   ${
                     isClosing
                       ? "bg-black/0 backdrop-blur-none"
                       : "bg-black/60 backdrop-blur-sm"
                   }`}
        onClick={handleClose}
      />

      {/* Modal content with enhanced transitions */}
      <div
        className={`relative bg-black/90 backdrop-blur-md rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] 
                      overflow-y-auto border border-white/60 
                      transition-all duration-300 ease-in-out
                      ${
                        isClosing
                          ? "opacity-0 translate-y-4 backdrop-blur-none"
                          : "opacity-100 translate-y-0 backdrop-blur-md"
                      }
                      animate-modal-open`}
      >
        <CloseButton onClose={handleClose} isClosing={isClosing} />

        <div className="p-6">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={1920}
            height={1080}
            className="w-full aspect-video object-cover rounded-lg mt-4"
          />

          <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
          {project.role && <p className="text-white/80 mt-1">{project.role}</p>}
          <p className="text-white/60 mt-1">{project.category}</p>

          <div className="mt-4 space-y-4">
            <p>{project.synopsis}</p>

            <div className="flex justify-between items-center">
              <p>
                <span className="font-semibold">Release Date: </span>
                {project.releaseDate}
              </p>

              {project.whereToWatch && (
                <a
                  href={project.whereToWatch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/60 underline"
                >
                  <span className="font-semibold">Watch Here</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
