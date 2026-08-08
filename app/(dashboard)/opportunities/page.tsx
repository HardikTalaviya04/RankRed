import { Button } from "@/components/ui/button"

export default function OpportunitiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Opportunities</h1>
          <p className="text-gray-500">Actionable insights from your tracked conversations.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" size="sm">All</Button>
           <Button variant="ghost" size="sm">Leads</Button>
           <Button variant="ghost" size="sm">Content</Button>
           <Button variant="ghost" size="sm">Product</Button>
        </div>
      </div>

      <div className="rounded-md border bg-white shadow-sm">
        <div className="p-8 text-center">
          <h3 className="text-sm font-medium text-gray-900">No opportunities found</h3>
          <p className="mt-1 text-sm text-gray-500">
            We haven&apos;t discovered any actionable opportunities yet. Check back later once the engine processes data.
          </p>
        </div>
      </div>
    </div>
  )
}
