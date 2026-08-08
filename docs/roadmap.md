# Roadmap

## Phase 1: Foundation (Current)
- Initialize Next.js, Supabase, Tailwind.
- Set up database schema and strict RLS policies.
- Build Authentication (Login, Signup).
- Build Onboarding Flow.
- Create core Dashboard UI and layout.
- Build basic CRUD views for Products, Keywords, Competitors.
- Empty states for future features.

## Phase 2: Reddit Ingestion Engine
- Integrate with official Reddit API (or compliant third-party data provider).
- Implement background workers to fetch subreddits and keyword mentions.
- Store raw data in `reddit_posts` and `reddit_comments`.
- Comply strictly with Reddit API rate limits and terms.

## Phase 3: AI Intelligence Engine
- Integrate OpenAI for processing raw posts.
- Extract intent, sentiment, pain points.
- Generate Opportunity scores.
- Create vectors and embeddings for advanced semantic search.

## Phase 4: Action & Automation
- Implement AI response drafting.
- Build Alerts system (Email/Slack via Resend).
- Finalize Stripe billing logic based on data usage or feature tiers.
