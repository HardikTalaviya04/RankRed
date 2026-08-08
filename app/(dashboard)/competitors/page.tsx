import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function CompetitorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Competitors</h1>
          <p className="text-gray-500">Track and analyze your competitors on Reddit.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Competitor
        </Button>
      </div>

      <div className="rounded-md border bg-white shadow-sm overflow-hidden">
         <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Website
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">
                  No competitors added yet. Click &quot;Add Competitor&quot; to start tracking.
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  )
}
