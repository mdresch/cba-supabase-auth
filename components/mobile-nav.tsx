"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    {
      label: "About",
      subItems: [
        { href: "/about", label: "About Us" },
        { href: "/mission", label: "Mission" },
        { href: "/vision", label: "Vision" },
        { href: "/core-values", label: "Core Values" },
        { href: "/purpose-statement", label: "Purpose Statement" },
        { href: "/company-history", label: "Company History" },
      ],
    },
    { href: "/showcase", label: "Showcase" },
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact" },
    {
      label: "Legal",
      subItems: [
        { href: "/terms", label: "Terms" },
        { href: "/privacy", label: "Privacy" },
        { href: "/code-of-conduct", label: "Code of Conduct" },
        { href: "/ethics", label: "Ethics" },
      ],
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <Link href={item.href} className="text-lg font-medium" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ) : (
                <div>
                  <span className="text-lg font-medium">{item.label}</span>
                  <div className="ml-4 mt-2 space-y-2">
                    {item.subItems?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block text-base"
                        onClick={() => setOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

