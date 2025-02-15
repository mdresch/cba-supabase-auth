import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Shield, Zap, BarChart, BookOpen, Telescope, Eye, SignpostBig } from "lucide-react"

const features = [
  {
    icon: Telescope,
    title: "Our Mission Statement",
    description: "At TechCorp, our mission is to revolutionize the way businesses operate through innovative technology solutions.",
    href: "/protected/mission"
  },
  {
    icon: Eye,
    title: "Our Vision Statment",
    description: "TechCorp envisions a world where technology seamlessly integrates into every aspect of business, enhancing productivity, fostering innovation, and creating sustainable growth opportunities.",
    href: "/protected/vision"
  },
  {
    icon: Cpu,
    title: "Our Core Values",
    description: "Innovation, Integrity, Collaboration, Excellence and Customer-Centric are Key Core Values we maintain",
    href: "/protected/core-values"
  },
  {
    icon: SignpostBig,
    title: "Purpose Statment",
    description: "To empower businesses through innovative technology, enabling them to thrive in the digital age.",
    href: "/protected/purpose-statement"
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About TechCorp</h1>
      <p className="mb-4">
        TechCorp is a leading technology company dedicated to providing innovative solutions for modern businesses. Our
        team of experts is committed to delivering cutting-edge products and services that help our clients stay ahead
        in today's fast-paced digital landscape.
      </p>
      <p>
        With a focus on artificial intelligence, cloud computing, and cybersecurity, we strive to empower organizations
        of all sizes to achieve their full potential through technology.
      </p>
    <section className="mb-16">
    <h2 className="text-3xl font-bold text-center mb-8">About Us Pages</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <Card key={index} className="shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <feature.icon className="w-10 h-10 mb-2 text-primary" />
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
          <CardContent>
          <Link href={feature.href} className="text-primary hover:underline mt-2 inline-block">
                    Learn more
                  </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
  </div>
  )
}