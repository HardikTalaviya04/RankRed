# RankRed

AI-powered RankRed Intelligence platform.

## Overview
RankRed is a SaaS platform that helps founders, marketers, and growth teams discover valuable Reddit conversations, identify customer intent, analyze competitors, and turn insights into actionable marketing opportunities.

**Note:** This repository currently contains **Phase 1** implementation, focusing on the foundational SaaS architecture, multi-tenant database design, authentication, and core UI.

## Prerequisites
- Node.js (v18+)
- npm / pnpm / yarn
- Supabase project

## Getting Started

1. **Clone the repository**
2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`
3. **Environment Variables**
   Copy \`.env.example\` to \`.env.local\` and fill in your Supabase credentials:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   You will need \`NEXT_PUBLIC_SUPABASE_URL\` and \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`.

4. **Database Setup**
   Ensure you have Supabase CLI installed, or use the Supabase Dashboard to run the SQL migration found in \`supabase/migrations/0000_initial_schema.sql\`.

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure
- \`app/\`: Next.js App Router (Auth, Dashboard, Onboarding, etc.)
- \`components/\`: UI components and layouts.
- \`lib/supabase/\`: Supabase client and server configuration.
- \`supabase/migrations/\`: Database schema and RLS policies.
- \`docs/\`: Architecture, database, and roadmap documentation.

## Security
This project uses Supabase Row Level Security (RLS) to enforce multi-tenancy. Never expose secret keys to the client. Environment variables like \`SUPABASE_SERVICE_ROLE_KEY\` and \`OPENAI_API_KEY\` must remain server-side only.

## Future Architecture
The platform is designed to seamlessly integrate a compliant Reddit data ingestion pipeline and an OpenAI-powered processing engine in subsequent phases.
