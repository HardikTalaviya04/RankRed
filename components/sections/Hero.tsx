import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        Reddit Powers AI Answers.
        <br />
        <span className="text-primary">Put Your Brand in Them.</span>
      </h1>

      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        AI is the new search engine. Reddit is where AI learns what to recommend.
        For years, businesses worked hard to rank on search engines. That era is the past.
      </p>

      <div className="max-w-md mx-auto pt-8">
        <form className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="you@company.com"
            className="flex-1"
            required
          />
          <Button type="submit" size="lg">
            Get Free Report →
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-3">
          Free report. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
