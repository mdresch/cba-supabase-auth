import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs/docs${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "https://www.bing.com/",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/mdresch/cba-supabase-auth",
}
