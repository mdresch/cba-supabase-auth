import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Shield, Zap, BarChart, BookOpen } from "lucide-react"


export default function CuttingEdgeSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cutting-edge Technology</h2>
          <p className="text-card-foreground">
            Our solutions leverage the latest advancements in AI and machine learning.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Scalable Solutions</h2>
          <p className="text-card-foreground">Our products grow with your business, ensuring long-term success.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Expert Support</h2>
          <p className="text-card-foreground">
            Our team of experts is always ready to assist you with any questions or issues.
          </p>
        </div>
      </section>
    )
}