import { PageLayout } from "@/components/pageLayout";
import { WorkGrid } from "@/components/workGrid";
import { PROJECTS } from "@/consts/projects";

export default function WorkPage() {
  return (
    <PageLayout className="w-full">
      <div className="space-y-12 mb-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Work</h1>
          <p className="text-lg text-white max-w-2xl mx-auto mb-4">
            Explore a collection of films and creative projects that showcase my
            storytelling passion.
          </p>
        </div>
      </div>
      <WorkGrid projects={PROJECTS} />
    </PageLayout>
  );
}
