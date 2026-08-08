import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Get discovered by AI. Start appearing in ChatGPT & Perplexity answers.",
      features: [
        "1 Reddit account",
        "1 campaign",
        "10 subreddits",
        "1 Brand Monitor domain",
        "50 AI Visibility prompts",
        "Unlimited seats",
        "Community support"
      ]
    },
    {
      name: "Growth",
      description: "Own your niche. Become the go-to recommendation in your category.",
      popular: true,
      features: [
        "3 Reddit accounts",
        "3 campaigns",
        "30 subreddits",
        "3 Brand Monitor domains",
        "200 AI Visibility prompts",
        "Unlimited seats",
        "Slack integration",
        "Email support"
      ]
    },
    {
      name: "Pro",
      description: "Dominate AI search. Be the default answer across all AI platforms.",
      features: [
        "Unlimited Reddit accounts",
        "3 campaigns",
        "100 subreddits",
        "5 Brand Monitor domains",
        "300 AI Visibility prompts",
        "Unlimited seats",
        "Slack integration",
        "Priority support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get your brand cited by AI</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card key={i} className={`flex flex-col border-zinc-800 bg-zinc-900 text-white ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
              <CardHeader>
                {plan.popular && (
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Most Popular</div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-zinc-400 min-h-[40px]">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
