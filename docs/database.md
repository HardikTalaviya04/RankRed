# Database Schema

## Overview
The database is built on Supabase (PostgreSQL) and structured for multi-tenant SaaS.

## Core Tables
- `profiles`: Extends `auth.users` with user details.
- `organizations`: The root tenant entity.
- `organization_members`: Maps users to organizations with specific roles.

## Application Tables
- `products`: Tracked products within an organization.
- `keywords`: Keywords related to products (problem, industry, competitor).
- `competitors`: Tracked competitors.
- `searches`: Pre-configured searches.
- `reddit_sources`: Subreddits to track.

## Future Pipeline Tables
- `reddit_posts`, `reddit_comments`: Storage for raw fetched data.
- `post_analysis`: AI metadata and scoring.
- `opportunities`: Extracted actionable insights (leads, content ideas).
- `ai_responses`: Drafted AI responses.
- `alerts`: Notifications.

## Row Level Security (RLS)
Security is enforced at the database level.
A custom function `is_member_of(org_id)` validates if the current user (`auth.uid()`) is in `organization_members` for the given `org_id`. This is used extensively across RLS policies.
