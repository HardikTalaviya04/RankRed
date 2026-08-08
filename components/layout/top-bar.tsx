import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center">
        {/* Workspace selector could go here */}
        <span className="text-sm font-medium text-gray-700">My Workspace</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
          <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  )
}
