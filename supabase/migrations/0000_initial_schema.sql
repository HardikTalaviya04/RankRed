-- Initial Schema Migration for Multi-Tenant SaaS

-- 1. Profiles (extends auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Organizations
CREATE TABLE public.organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  owner_id UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Organization Members
CREATE TYPE public.user_role AS ENUM ('owner', 'admin', 'member');

CREATE TABLE public.organization_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.user_role NOT NULL DEFAULT 'member',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(organization_id, user_id)
);

-- 4. Products
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  website_url TEXT,
  target_customer TEXT,
  industry TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Keywords
CREATE TYPE public.keyword_type AS ENUM ('product', 'problem', 'industry', 'competitor', 'feature', 'custom');

CREATE TABLE public.keywords (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  type public.keyword_type NOT NULL DEFAULT 'custom',
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Competitors
CREATE TABLE public.competitors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  website_url TEXT,
  description TEXT,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. Searches
CREATE TABLE public.searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  query TEXT NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 8. Reddit Sources
CREATE TABLE public.reddit_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  subreddit TEXT NOT NULL,
  source_type TEXT NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 9. Reddit Posts (Prepared for future)
CREATE TABLE public.reddit_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  external_id TEXT UNIQUE NOT NULL,
  subreddit TEXT,
  title TEXT,
  body TEXT,
  author TEXT,
  permalink TEXT,
  score INTEGER,
  comment_count INTEGER,
  created_at TIMESTAMPTZ,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  raw_data JSONB,
  content_hash TEXT
);

-- 10. Reddit Comments (Prepared for future)
CREATE TABLE public.reddit_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  external_id TEXT UNIQUE NOT NULL,
  post_id UUID REFERENCES public.reddit_posts(id) ON DELETE CASCADE,
  parent_external_id TEXT,
  author TEXT,
  body TEXT,
  score INTEGER,
  created_at TIMESTAMPTZ,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  raw_data JSONB
);

-- 11. Post Analysis (Prepared for future AI)
CREATE TABLE public.post_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.reddit_posts(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  relevance_score NUMERIC(5, 2),
  intent_score NUMERIC(5, 2),
  buying_intent BOOLEAN,
  sentiment TEXT,
  pain_points JSONB,
  topics JSONB,
  summary TEXT,
  analyzed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  model TEXT,
  analysis_version TEXT
);

-- 12. Opportunities
CREATE TYPE public.opportunity_type AS ENUM ('lead', 'content', 'product', 'competitor', 'market');
CREATE TYPE public.opportunity_status AS ENUM ('new', 'reviewed', 'saved', 'dismissed', 'converted');

CREATE TABLE public.opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  post_id UUID REFERENCES public.reddit_posts(id) ON DELETE SET NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  opportunity_score NUMERIC(5, 2),
  opportunity_type public.opportunity_type NOT NULL,
  status public.opportunity_status NOT NULL DEFAULT 'new',
  reason TEXT,
  recommended_action TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 13. AI Responses
CREATE TABLE public.ai_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  opportunity_id UUID NOT NULL REFERENCES public.opportunities(id) ON DELETE CASCADE,
  response_text TEXT NOT NULL,
  model TEXT,
  status TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 14. Alerts
CREATE TABLE public.alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  entity_type TEXT,
  entity_id UUID,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- Indexes
CREATE INDEX idx_organizations_owner_id ON public.organizations(owner_id);
CREATE INDEX idx_organization_members_user_id ON public.organization_members(user_id);
CREATE INDEX idx_organization_members_organization_id ON public.organization_members(organization_id);
CREATE INDEX idx_products_organization_id ON public.products(organization_id);
CREATE INDEX idx_keywords_organization_id ON public.keywords(organization_id);
CREATE INDEX idx_competitors_organization_id ON public.competitors(organization_id);
CREATE INDEX idx_searches_organization_id ON public.searches(organization_id);
CREATE INDEX idx_reddit_sources_organization_id ON public.reddit_sources(organization_id);
CREATE INDEX idx_post_analysis_organization_id ON public.post_analysis(organization_id);
CREATE INDEX idx_opportunities_organization_id ON public.opportunities(organization_id);
CREATE INDEX idx_ai_responses_organization_id ON public.ai_responses(organization_id);
CREATE INDEX idx_alerts_organization_id ON public.alerts(organization_id);
CREATE INDEX idx_alerts_user_id ON public.alerts(user_id);

-- ROW LEVEL SECURITY POLICIES

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.competitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reddit_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reddit_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reddit_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;

-- Helper Function to check if a user is a member of an organization
CREATE OR REPLACE FUNCTION public.is_member_of(org_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.organization_members
    WHERE organization_id = org_id AND user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- Profiles: users can see and update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Organizations: users can see organizations they belong to. Owners can update/delete.
CREATE POLICY "View organizations user belongs to" ON public.organizations FOR SELECT USING (public.is_member_of(id) OR owner_id = auth.uid());
CREATE POLICY "Users can create organizations" ON public.organizations FOR INSERT WITH CHECK (owner_id = auth.uid());
CREATE POLICY "Owners can update their organizations" ON public.organizations FOR UPDATE USING (owner_id = auth.uid());
CREATE POLICY "Owners can delete their organizations" ON public.organizations FOR DELETE USING (owner_id = auth.uid());

-- Organization Members: members can view other members. Owners/Admins can manage.
CREATE POLICY "Members can view organization members" ON public.organization_members FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Users can insert themselves during org creation" ON public.organization_members FOR INSERT WITH CHECK (user_id = auth.uid());
-- Simplified for phase 1: members can manage other members if they are part of the org (in a real app, restrict to owner/admin)
CREATE POLICY "Members can manage members" ON public.organization_members FOR ALL USING (public.is_member_of(organization_id));

-- Shared Policy for Organization-Scoped Data (Products, Keywords, Competitors, etc.)
-- Apply to all tables with organization_id
CREATE POLICY "Members can view org data" ON public.products FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can insert org data" ON public.products FOR INSERT WITH CHECK (public.is_member_of(organization_id));
CREATE POLICY "Members can update org data" ON public.products FOR UPDATE USING (public.is_member_of(organization_id));
CREATE POLICY "Members can delete org data" ON public.products FOR DELETE USING (public.is_member_of(organization_id));

CREATE POLICY "Members can view org keywords" ON public.keywords FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can insert org keywords" ON public.keywords FOR INSERT WITH CHECK (public.is_member_of(organization_id));
CREATE POLICY "Members can update org keywords" ON public.keywords FOR UPDATE USING (public.is_member_of(organization_id));
CREATE POLICY "Members can delete org keywords" ON public.keywords FOR DELETE USING (public.is_member_of(organization_id));

CREATE POLICY "Members can view org competitors" ON public.competitors FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can insert org competitors" ON public.competitors FOR INSERT WITH CHECK (public.is_member_of(organization_id));
CREATE POLICY "Members can update org competitors" ON public.competitors FOR UPDATE USING (public.is_member_of(organization_id));
CREATE POLICY "Members can delete org competitors" ON public.competitors FOR DELETE USING (public.is_member_of(organization_id));

CREATE POLICY "Members can view org searches" ON public.searches FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can manage org searches" ON public.searches FOR ALL USING (public.is_member_of(organization_id));

CREATE POLICY "Members can view org reddit sources" ON public.reddit_sources FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can manage org reddit sources" ON public.reddit_sources FOR ALL USING (public.is_member_of(organization_id));

-- Reddit Posts and Comments are global right now without organization_id, so we restrict them or make them readable to authenticated users, but realistically they are fetched by backend. For Phase 1, read-only for authenticated users.
CREATE POLICY "Authenticated users can read reddit posts" ON public.reddit_posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can read reddit comments" ON public.reddit_comments FOR SELECT TO authenticated USING (true);

CREATE POLICY "Members can view org post analysis" ON public.post_analysis FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can view org opportunities" ON public.opportunities FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can manage org opportunities" ON public.opportunities FOR ALL USING (public.is_member_of(organization_id));

CREATE POLICY "Members can view org ai responses" ON public.ai_responses FOR SELECT USING (public.is_member_of(organization_id));
CREATE POLICY "Members can manage org ai responses" ON public.ai_responses FOR ALL USING (public.is_member_of(organization_id));

CREATE POLICY "Members can view org alerts" ON public.alerts FOR SELECT USING (public.is_member_of(organization_id) AND user_id = auth.uid());
CREATE POLICY "Members can manage org alerts" ON public.alerts FOR ALL USING (public.is_member_of(organization_id) AND user_id = auth.uid());


-- Create triggers for updated_at where needed
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON public.organizations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_keywords_updated_at BEFORE UPDATE ON public.keywords FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_competitors_updated_at BEFORE UPDATE ON public.competitors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_searches_updated_at BEFORE UPDATE ON public.searches FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_opportunities_updated_at BEFORE UPDATE ON public.opportunities FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_ai_responses_updated_at BEFORE UPDATE ON public.ai_responses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
