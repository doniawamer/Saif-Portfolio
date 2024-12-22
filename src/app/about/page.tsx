import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/constants/links";
import { PageLayout } from "@/components/pageLayout";

export default function AboutPage() {
  return (
    <PageLayout>
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
          <h1 className="text-5xl font-bold tracking-wider">Saif Amer</h1>

          <div className="flex gap-8 text-lg">
            {SOCIAL_LINKS.map((link) => (
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
              Saif is an Arab-Canadian filmmaker who was born and raised _____.
            </p>

            <p>To date, Saif's projects have ____</p>

            <p>
              Saif strives to shine a light on underrepresented communities and
              unearth stories through his work in the commercial and video
              space.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
