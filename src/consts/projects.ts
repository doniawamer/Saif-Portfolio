export interface ProjectType {
  id: string;
  title: string;
  thumbnail: string;
  hoverVideo?: string;
  category: string;
  synopsis: string;
  role: string;
  whereToWatch?: string;
  releaseDate: string;
}

export const PROJECTS = [
  {
    id: "1",
    title: "Open Minded",
    thumbnail: "/assets/imgs/placeholder.png",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis:
      "Simon, dissatisfied with his seemingly hopeless life, contacts the eccentric Dr Oktoberstein, to partake in an experimental mind swapping surgery",
    releaseDate: "2023",
    whereToWatch: "https://www.youtube.com/watch?v=7HpPGiigQGg&t=3s",
    role: "Co-Director, Cinematographer, and Supporting Actor",
    tags: ["Short Film", "48 Hour"],
    genre: "Sci-Fi",
  },
  {
    id: "2",
    title: "Santa's Last Ride",
    thumbnail: "/assets/imgs/santa-last-ride.jpeg",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis:
      "Fed up with an unappreciative populus, Santa Claus hangs up his hat and takes up an unconventional hobby",
    releaseDate: "2024",
    whereToWatch: "https://www.youtube.com/watch?v=WD_DpE1b-do&t=2s",
    role: "Director, Cinematographer, Writer",
    tags: ["Short Film"],
    genre: "Comedy",
  },
  {
    id: "3",
    title: "Losers Weepers",
    thumbnail: "/assets/imgs/placeholder.png",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis:
      "Oscar, a disillusioned janitor, deals with increasing paranoia, after finding a bag of questionably legal money on the job",
    releaseDate: "2024",
    whereToWatch: "https://www.youtube.com/watch?v=g7myH9NqHLI",
    role: "Co-Director, Cinematographer",
    tags: ["Short Film", "48 Hour"],
    genre: "Thriller",
  },
  {
    id: "4",
    title: "Last Stop",
    thumbnail: "/assets/imgs/last-stop.jpeg",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis:
      "At a lonely bus stop, a conversation sparks between a confused traveler and a helpful guide",
    releaseDate: "March 2025",
    whereToWatch: "",
    role: "Director, Cinematographer, Writer",
    tags: ["Short Film"],
    genre: "Drama",
  },
  {
    id: "5",
    title: "One Night Only",
    thumbnail: "/assets/imgs/one-night-only.jpeg",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis:
      "Comedian Cal recalls a musician he met a year prior, and his feelings towards him. Reevaluating their relationship on stage, while trying to maintain his comedic composure",
    releaseDate: "March 2025",
    whereToWatch: "",
    role: "Cinematographer",
    tags: ["Short Film"],
    genre: "Romance",
  },
  {
    id: "6",
    title: "Buffalo Grass",
    thumbnail: "/assets/imgs/buffalo-grass.jpeg",
    hoverVideo: "/assets/vids/demo.mov",
    category: "Short Film",
    synopsis:
      "A lonely sprinkler salesman confesses his love for a barista in a letter",
    releaseDate: "March 2025",
    whereToWatch: "",
    role: "Director, Cinematographer, Writer",
    tags: ["Short Film"],
    genre: "Romance",
  },
];
