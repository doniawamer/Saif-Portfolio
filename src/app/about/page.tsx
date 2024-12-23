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
            {SOCIAL_LINKS.map((link: { title: string; href: string }) => (
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
              Saif is an Arab-Canadian filmmaker who was born in the Middle-East
              and raised in Canada. His artistic pursuits span both film and
              music, performing as a bass guitarist and trumpet player while
              pursuing filmmaking. This dual passion for visual and musical
              storytelling brings a unique rhythmic sensibility to his
              directorial work.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
