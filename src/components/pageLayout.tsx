import { Navigation } from "@/components/navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}
export function PageLayout({ children, className }: PageLayoutProps) {
  // Create a base className string that will be consistent
  const baseClasses = "max-w-7xl mx-auto px-6 pt-32 pb-16 flex-1";

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white flex flex-col">
        <div
          className={className ? `${baseClasses} ${className}` : baseClasses}
        >
          {children}
        </div>
      </div>
    </>
  );
}
