import { PageRoutes } from '@/lib/pageroutes'

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}` },
  {
    title: "Blog",
    href: "/posts",
    external: false,
  },
  {
    title: "Home",
    href: "https://www.bing.com/",
    external: true,
  },
  {
    title: "Home",
    href: "/protected",
    external: false,
  }
]

export const GitHubLink = {
  href: "https://github.com/mdresch/cba-supabase-auth",
}
