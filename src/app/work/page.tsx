import { PageLayout } from "@/components/pageLayout";
import { WorkGrid } from "@/components/workGrid";

const projects = [
  {
    id: "1",
    title: "Buffalo Grass",
    thumbnail: "/assets/imgs/buffalo-grass.jpeg",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis: "Add synopsis here",
    releaseDate: "2024",
    whereToWatch: "Coming Soon",
  },
  {
    id: "2",
    title: `Santa's Last Ride`,
    thumbnail: "/assets/imgs/santa-last-ride-2.jpeg",
    // hoverVideo: '/assets/vids/demo.mov',
    category: "Short Film",
    synopsis: "Add synopsis here",
    releaseDate: "2024",
  },
  {
    id: "3",
    title: "Buffalo Grass",
    thumbnail: "/assets/imgs/buffalo-grass.jpeg",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis: "Add synopsis here",
    releaseDate: "2024",
    whereToWatch: "Coming Soon",
  },
  {
    id: "4",
    title: `Santa's Last Ride`,
    thumbnail: "/assets/imgs/santa-last-ride-2.jpeg",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis: "Add synopsis here",
    releaseDate: "2024",
  },
];

export default function WorkPage() {
  return (
    <PageLayout>
      <WorkGrid projects={projects} />
    </PageLayout>
  );
}
