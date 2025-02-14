import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Shield, Zap, BarChart, BookOpen } from "lucide-react"


export default function TransformBusinessSection() {
  return (
    <section className="text-center mb-16">
    <h2 className="text-2xl font-semibold mb-4">Ready to transform your business?</h2>
    <Button asChild>
      <Link href="/contact">Contact Us</Link>
    </Button>
    
    <Button asChild>
    <Link href="/docs">Documentation</Link>
    </Button>
  </section>
  )
}