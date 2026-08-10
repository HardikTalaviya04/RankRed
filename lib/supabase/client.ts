import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
 "https://yctrdgusiomurxxsaqkt.supabase.co",
    "sb_publishable_W2hjcPUNcTSCKLUrrwjcqg_xiSA_415",
  )
}
