"use client"

import * as React from "react"
import Link from "next/link"
import { Cpu, SignpostBig, Book } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const about: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/protected/about",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Mission Statement",
    href: "/protected/mission",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Vision Statement",
    href: "/protected/vision",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Core Values",
    href: "/protected/core-values",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Purpose Statement",
    href: "/protected/purpose-statement",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Company History",
    href: "/protected/company-history",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const showcase: { title: string; href: string; description: string; id: number; name: string; category: string; image: string; details: string}[] = [
  {
    id: 1,
    name: "TechAI",
    category: "AI",
    description: "AI-powered business analytics",
    image: "/showcase-techai.jpg?height=400&width=400",
    details: "TechAI uses advanced machine learning algorithms to provide real-time insights into your business data.",
    title: "TechAI",
    href: "/showcase/techai",    
  },
  {
    id: 2,
    name: "CloudScale",
    category: "Infrastructure",
    description: "Scalable cloud infrastructure",
    image: "/showcase-cloudscale.jpg?height=400&width=400",
    details: "CloudScale offers a flexible, high-performance cloud platform that grows with your business needs.",
    title: "CloudScale",
    href: "/showcase/cloudscale",
  },
  {
    id: 3,
    name: "SecureGuard",
    category: "Security",
    description: "Advanced cybersecurity solution",
    image: "/showcase-secureguard.jpeg?height=400&width=400",
    details:
      "SecureGuard provides state-of-the-art protection against the latest cyber threats, ensuring your data remains safe.",
    title: "SecureGuard",
    href: "/showcase/secureguard",
  },
  {
    id: 4,
    name: "DataSync",
    category: "Data",
    description: "Real-time data synchronization",
    image: "/showcase-datasync.jpg?height=400&width=400",
    details: "DataSync ensures your data is always up-to-date across all your systems and devices.",
    title: "DataSync",
    href: "/showcase/datasync",
  },
  {
    id: 5,
    name: "AIAssist",
    category: "AI",
    description: "AI-powered virtual assistant",
    image: "/showcase-aiassist.jpg?height=400&width=400",
    details: "AIAssist provides intelligent virtual assistance to streamline your daily tasks and boost productivity.",
    title: "AIAssist",
    href: "/showcase/aiassist",
  },
  {
    id: 6,
    name: "CloudBackup",
    category: "Infrastructure",
    description: "Automated cloud backup solution",
    image: "/showcase-cloudbackup.jpg?height=400&width=400",
    details:
      "CloudBackup ensures your critical data is always safe and easily recoverable with automated cloud backups.",
    title: "CloudBackup",
    href: "/showcase/cloudbackup",
  },
  {
    id: 7,
    name: "CyberShield",
    category: "Security",
    description: "Comprehensive cybersecurity suite",
    image: "/showcase-cybershield-2.jpeg?height=400&width=400",
    details:
      "CyberShield offers a full suite of cybersecurity tools to protect your business from evolving digital threats.",
    title: "CyberShield",
    href: "/showcase/cybershield",
  },
  {
    id: 8,
    name: "DataViz",
    category: "Data",
    description: "Advanced data visualization tool",
    image: "/showcase-dataviz.jpg?height=400&width=400",
    details:
      "DataViz transforms complex data into clear, actionable insights through powerful visualization techniques.",
    title: "DataViz",
    href: "/showcase/dataviz",
  },
]

const legal: { title: string; href: string; description: string }[] = [
  {
    title: "Legal",
    href: "/protected/legal",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Terms & Conditions",
    href: "/protected/terms",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Privacy Policy",
    href: "/protected/privacy",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Code of Conduct",
    href: "/protected/code-of-conduct",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Ethics",
    href: "/protected/ethics",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Cpu className="w-10 h-10 mb-2 text-primary" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Home
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/protected/about" title="About Us">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/protected/account" title="Account">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/protected/legal" title="Legal">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Showcase</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[750px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/protected/showcase"
                  >
                    <SignpostBig className="w-10 h-10 mb-2 text-primary" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Showcase
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Showcases wherby our value proposition and value creation alligned with our core values.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {showcase.map((showcase) => (
                <ListItem
                  key={showcase.title}
                  title={showcase.title}
                  href={showcase.href}
                >
                  {showcase.description}
                </ListItem>
              ))}
            </ul>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {about.map((about) => (
                <ListItem
                  key={about.title}
                  title={about.title}
                  href={about.href}
                >
                  {about.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Book className="w-10 h-10 mb-2 text-primary" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Documentation
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="posts" title="Blog">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="docs" title="Documentation">
                How to install dependencies and structure your app.
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Legal</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {legal.map((legal) => (
                <ListItem
                  key={legal.title}
                  title={legal.title}
                  href={legal.href}
                >
                  {legal.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="account"
                  >
                    <Book className="w-10 h-10 mb-2 text-primary" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Account
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Message to the user regarding the additional access granted by submitting their username
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="protected/dashboard" title="Dashboard">
                Dashboard components built using some care.
              </ListItem>
              <ListItem href="account" title="Account">
                How to install dependencies and structure your app.
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
