import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Welcome to RedditGrowth</CardTitle>
          <CardDescription>Let&apos;s set up your workspace to start discovering opportunities.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="company-name" className="text-sm font-medium text-gray-700">What&apos;s your company/product name?</label>
            <Input id="company-name" placeholder="e.g. Acme Corp" />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-gray-700">Describe what your product does.</label>
            <Input id="description" placeholder="e.g. B2B SaaS for inventory management" />
          </div>
          <div className="space-y-2">
            <label htmlFor="target-customer" className="text-sm font-medium text-gray-700">Who is your target customer?</label>
            <Input id="target-customer" placeholder="e.g. E-commerce founders" />
          </div>
           <div className="space-y-2">
            <label htmlFor="industry" className="text-sm font-medium text-gray-700">What industry are you in?</label>
            <Input id="industry" placeholder="e.g. E-commerce" />
          </div>
           <div className="space-y-2">
            <label htmlFor="website" className="text-sm font-medium text-gray-700">Add your website.</label>
            <Input id="website" placeholder="https://example.com" type="url" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Skip for now</Button>
          <Button>Complete Setup</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
