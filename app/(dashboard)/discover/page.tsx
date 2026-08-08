import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function DiscoverPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Discover</h1>
          <p className="text-gray-500">Find relevant conversations across Reddit.</p>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search keywords..." className="w-full sm:w-64" />
          <Button variant="secondary">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <div className="flex h-[400px] flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-white">
        <Search className="h-12 w-12 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">No Reddit conversations discovered yet.</h3>
        <p className="mt-1 text-sm text-gray-500 max-w-md text-center">
          The Reddit intelligence engine will be activated in the next phase.
          Your tracked keywords and competitors will appear here once data ingestion begins.
        </p>
      </div>
    </div>
  )
}
