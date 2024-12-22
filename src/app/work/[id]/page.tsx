import { Navigation } from '@/components/navigation'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <div className="space-y-8">
            <div className="aspect-video w-full relative">
              <video
                src="/your-video-url.mp4"
                controls
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Project Title</h1>
              <p className="text-lg text-gray-300 mb-8">
                Project description and details go here. This section can include information
                about the client, the creative process, and the outcome of the project.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h2 className="text-sm font-bold mb-2">CLIENT</h2>
                  <p className="text-gray-300">Client Name</p>
                </div>
                <div>
                  <h2 className="text-sm font-bold mb-2">YEAR</h2>
                  <p className="text-gray-300">2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

