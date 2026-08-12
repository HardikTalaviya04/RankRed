# RankRed Architecture

## Overview
RankRed is an AI-powered RankRed Intelligence platform designed to help founders and marketers discover valuable conversations and actionable insights.

## Technology Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui.
- **Backend**: Next.js server actions / route handlers.
- **Database**: Supabase PostgreSQL.
- **Authentication**: Supabase Auth with RLS.
- **Multi-Tenancy**: Database-level isolation using Row Level Security (RLS).

## Core Modules
- **Authentication**: Managed by Supabase (login, signup, sessions).
- **Organizations**: Central entity for multi-tenancy. Users belong to organizations.
- **Products & Keywords**: Core entities defining what the system monitors.
- **Data Ingestion (Future)**: Will securely and compliantly fetch Reddit data via official/compliant APIs.
- **AI Processing (Future)**: Will analyze posts for intent, sentiment, and opportunities.
- **Alerts (Future)**: Will notify users via dashboard, email, or Slack.

## Multi-Tenancy Strategy
All organization-scoped data tables contain an `organization_id`. Supabase Row Level Security (RLS) ensures that authenticated users can only query, insert, update, or delete rows associated with the organizations they belong to.
