import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">RankRed</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/#how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">How It Works</Link>
            <Link href="/#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
            <Link href="/help-center" className="transition-colors hover:text-foreground/80 text-foreground/60">Help Center</Link>
            <Link href="/#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">Customers</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://chromewebstore.google.com/detail/rankred-your-growth-assi/hgpbemhkofmchpkjckocgdfpjiijhpkd" className="hidden md:block text-sm font-medium text-foreground/60 hover:text-foreground/80">
            Chrome Extension
          </Link>
          <Link href="https://app.rankred.ai/login" className="text-sm font-medium text-foreground/60 hover:text-foreground/80">
            Login
          </Link>
          <Button asChild>
            <Link href="https://app.rankred.ai/register">Start My Free Trial</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
