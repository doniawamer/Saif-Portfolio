import { Navigation } from '@/components/navigation'
import { WorkGrid } from '@/components/workGrid'

const projects = [
  {
    id: 'the-north-face',
    title: 'The North Face',
    thumbnail: '/assets/imgs/last-stop-2.jpeg?height=720&width=1280',
    hoverVideo: '/your-video-url.mp4',
    category: 'Commercial'
  },
  // Add more projects here
]

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <WorkGrid projects={projects} />
        </div>
      </div>
    </>
  )
}

