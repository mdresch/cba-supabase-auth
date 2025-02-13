import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
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

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to transform your business?</h2>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

