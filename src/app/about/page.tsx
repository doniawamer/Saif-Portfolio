import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/consts/links";
import { PageLayout } from "@/components/pageLayout";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto">
          <Image
            src="/assets/imgs/saif.jpeg?height=1200&width=900"
            alt="Saif portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-8">
          <h1 className="text-5xl font-bold tracking-wider">Saif Amer</h1>

          <div className="flex gap-8 text-lg">
            {SOCIAL_LINKS.map((link: any) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:underline underline-offset-4 transition-all uppercase"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Saif is an Arab-Canadian filmmaker who was born in Dubai and
              raised in Canada. His artistic pursuits span both film and music,
              performing as a bass guitarist and trumpet player in multiple
              bands while pursuing his filmmaking career. This dual passion for
              visual and musical storytelling brings a unique rhythmic
              sensibility to his directorial work.
            </p>

            {/* <p>
              To date, {`Saif's`} projects have demonstrated his multifaceted
              talents as a director, cinematographer, and writer. His portfolio
              includes compelling works like "{`Santa's`} Last Ride," a comedic
              take on a familiar character. His more recent works such as "Last
              Stop" and "Buffalo Grass" reveal his ability to craft intimate
              human stories, while "Losers Weepers" shows his skill in building
              tension and suspense.
            </p> */}

            <p>
              Saif strives to shine a light on underrepresented communities and
              unearth stories through his work. His diverse body of work
              demonstrates an ability to tackle various genres while maintaining
              a consistent focus on authentic human experiences, from the
              paranoid anxiety of a janitor finding questionable money to the
              vulnerable confession of a lonely sprinkler salesman to a barista.
              His background in music and film allows him to approach
              storytelling with both visual flair and sonic sensitivity.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
