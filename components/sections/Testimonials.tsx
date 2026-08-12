import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Reddit went from a side channel to our top growth lever. We 3x'd our paying users.",
      author: "Ori Granot",
      role: "Founder, SuperDS"
    },
    {
      quote: "ChatGPT is now our #3 traffic source. Traffic from AI assistants is up massively.",
      author: "Jessica Robertson",
      role: "Chief Revenue Officer, Orbb"
    },
    {
      quote: "We moderate and answer support without leaving RankRed.",
      author: "Amit Caner",
      role: "Social Media Team Lead, CrownCoinsCasino"
    },
    {
      quote: "AI architects now find us on LLMs before they hit our docs.",
      author: "Dr. Einat Orr",
      role: "Co-Founder & CEO, lakeFS"
    },
    {
      quote: "Building real trust on Reddit grew our LLM traffic 308% in five months.",
      author: "Jordan Plotkin",
      role: "Growth & Marketing Strategy, CommuniPass"
    },
    {
      quote: "AI traffic went from 3 leads a month to 40 in 90 days.",
      author: "Elad Cheikha",
      role: "Director of Growth, Teramind"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight">200+ teams getting cited by AI</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i} className="bg-muted/10">
            <CardContent className="p-6 flex flex-col h-full justify-between">
              <blockquote className="text-lg font-medium mb-6">&quot;{t.quote}&quot;</blockquote>
              <div>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
