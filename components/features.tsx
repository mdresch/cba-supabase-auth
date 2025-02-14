import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Shield, Zap, BarChart, BookOpen } from "lucide-react"

const features = [
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Harness the power of artificial intelligence to gain deep insights into your data.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Protect your business with state-of-the-art cybersecurity measures.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Experience lightning-fast performance with our optimized infrastructure.",
    },
    {
      icon: BarChart,
      title: "Real-time Reporting",
      description: "Access up-to-the-minute reports and analytics for informed decision-making.",
    },
  ]

export default function FeatureSection() {
  return (
          <div className="container mx-auto px-4 py-12">
    <section className="mb-16">
    <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
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
        </Card>
      ))}
    </div>
  </section>
  </div>
)
}