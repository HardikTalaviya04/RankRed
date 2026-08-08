import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your workspace and profile settings.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Workspace Settings</CardTitle>
            <CardDescription>Update your company details and defaults.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <p className="text-sm text-gray-500">Workspace settings will be available here.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage the products you are tracking.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Product management forms will be available here.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Keywords</CardTitle>
            <CardDescription>Configure keywords for the Reddit intelligence engine.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Keyword management will be available here.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integrations (Coming Soon)</CardTitle>
            <CardDescription>Connect Reddit, Slack, and other tools.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Integration settings will be enabled in future phases.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
