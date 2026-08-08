import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "See what AI actually recommends",
      description: "We scan what AI actually recommends. From 220 countries. Daily."
    },
    {
      title: "Never miss a mention",
      description: "Track your brand mentions across the entire Reddit ecosystem."
    },
    {
      title: "Moderate at scale with AI",
      description: "Automatically identify and respond to key conversations."
    },
    {
      title: "Comment anywhere on Reddit",
      description: "Seamlessly jump into threads and provide value as your brand."
    },
    {
      title: "Track what's working",
      description: "Analyze your AI share of voice and traffic metrics."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to own AI recommendations</h2>
          <p className="text-lg text-muted-foreground">Get into discussions AI already trusts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
