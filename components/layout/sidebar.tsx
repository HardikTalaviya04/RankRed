import Link from "next/link"
import {
  LayoutDashboard,
  Search,
  Lightbulb,
  Target,
  FileText,
  Users,
  TrendingUp,
  Bell,
  Settings
} from "lucide-react"

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Discover', href: '/discover', icon: Search },
  { name: 'Opportunities', href: '/opportunities', icon: Lightbulb },
  { name: 'Leads', href: '/leads', icon: Target },
  { name: 'Content Ideas', href: '/content', icon: FileText },
  { name: 'Competitors', href: '/competitors', icon: Users },
  { name: 'Market Trends', href: '/trends', icon: TrendingUp },
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center px-6 border-b">
        <span className="text-xl font-bold text-gray-900">RankRed</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
