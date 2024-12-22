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
                  Saif is an Arab-Canadian filmmaker who was born and raised
                  _____.
                </p>

                <p>
                  To date, Saif's projects have ____
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
