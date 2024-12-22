"use client";

import { PageLayout } from "@/components/pageLayout";
import { LINKS, SOCIAL_LINKS } from "@/constants/links";
import Link from "next/link";

interface SocialLink {
  title: string;
  href: string;
}
interface ContactSection {
  title: string;
  content?: string[];
  links?: SocialLink[];
  isButton?: boolean;
}

// Data object containing all contact information
const contactData: ContactSection[] = [
  {
    title: "Contact",
    links: SOCIAL_LINKS,
  },
  {
    title: "Location",
    content: ["Kingston, ON", "Available Worldwide"],
  },
  {
    title: "Inquiries",
    content: ["For Bookings And Collaborations"],
    links: [{ title: "Let's Work Together", href: LINKS.EMAIL }],
    isButton: true,
  },
];

export default function ContactPage() {
  const renderSectionContent = (section: ContactSection) => {
    return (
      <div className="text-lg">
        {/* Render content array if it exists */}
        {section.content?.map((text, index) => (
          <p key={index} className={index > 0 ? "mt-2" : ""}>
            {text}
          </p>
        ))}

        {/* Render links if they exist */}
        {section.links && (
          <div
            className={`flex ${
              section.title === "Contact"
                ? "flex-col md:flex-row justify-center gap-8 md:gap-24"
                : "flex-col items-center"
            }`}
          >
            {section.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={
                  section.isButton
                    ? "inline-block border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300 mt-8 rounded-md hover:scale-105 active:scale-95"
                    : "uppercase hover:underline underline-offset-4 transition-all"
                }
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <PageLayout>
      <div>
        {contactData.map((section, index) => (
          <section
            key={index}
            className={`text-center ${
              index !== contactData.length - 1 ? "mb-24" : ""
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider">
              {section.title}
            </h2>
            {renderSectionContent(section)}
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
