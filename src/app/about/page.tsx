import { Navigation } from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/assets/imgs/buffalo-grass.jpeg?height=1200&width=900"
                alt="Saif portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-wider">Saif</h1>

              <div className="flex gap-8 text-lg">
                <Link
                  href="https://instagram.com"
                  className="hover:opacity-70 transition-opacity"
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="hover:opacity-70 transition-opacity"
                >
                  EMAIL
                </Link>
                <Link
                  href="https://vimeo.com"
                  className="hover:opacity-70 transition-opacity"
                >
                  VIMEO
                </Link>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Saif is an Iranian-American filmmaker who was born and raised
                  in the outskirts of Los Angeles. His video collaborations span
                  some of today's most influential artists, including Nick
                  Minaj, Lil Wayne, Roddy Ricch, Missy Elliott, J Balvin,
                  Marshmello, Tyga, Kehlani, and more.
                </p>

                <p>
                  To date, Saif's projects have accumulated over 2 billion
                  views online and have been recognized as some of the
                  most-esteemed videos of the year — with his videos for Latto's
                  "Big Energy" & Polo G's "Rapstar" being VMA nominated for
                  "Best Hip-Hop Video" along with Chris Bailey's video "How Does
                  It Feel" for "Best R&B video," and video for Aitch's rap
                  anthem "Rain" winning GRM Daily's "Video of the Year."
                </p>

                <p>
                  Saif strives to shine a light on underrepresented communities
                  and unearth stories through his work in the commercial and
                  video space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
