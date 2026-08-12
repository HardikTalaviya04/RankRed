import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <Link href="/" className="font-bold text-xl">RankRed</Link>
          <p className="text-sm text-muted-foreground">Get cited by ChatGPT, Claude, Gemini & Perplexity</p>
          <div className="flex gap-4">
            {/* Placeholder for social icons */}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/#features" className="hover:text-foreground">Features</Link></li>
            <li><Link href="/#pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link href="https://chromewebstore.google.com/detail/rankred-your-growth-assi/hgpbemhkofmchpkjckocgdfpjiijhpkd" className="hover:text-foreground">Chrome Extension</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link href="/blog/tag/reddit-marketing" className="hover:text-foreground">Reddit Marketing Guide</Link></li>
            <li><Link href="https://docs.rankred.ai" className="hover:text-foreground">Docs</Link></li>
            <li><Link href="/directory" className="hover:text-foreground">Company Directory</Link></li>
            <li><Link href="/help-center" className="hover:text-foreground">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Compare</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/alternatives" className="hover:text-foreground">All Alternatives</Link></li>
            <li><Link href="/alternatives/gummysearch" className="hover:text-foreground">GummySearch Alternative</Link></li>
            <li><Link href="/alternatives/replyagent" className="hover:text-foreground">ReplyAgent Alternative</Link></li>
            <li><Link href="/alternatives/redreach" className="hover:text-foreground">Redreach Alternative</Link></li>
            <li><Link href="/vs" className="hover:text-foreground">All Comparisons</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/affiliates" className="hover:text-foreground">Affiliate Program</Link></li>
            <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; 2026 RankRed. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/legal/privacy-policy" className="hover:text-foreground">Privacy</Link>
          <span>&bull;</span>
          <Link href="/legal/terms-of-use" className="hover:text-foreground">Terms</Link>
          <span>&bull;</span>
          <Link href="/legal/cookies-policy" className="hover:text-foreground">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
