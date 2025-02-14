import Link from "next/link"
import blogPost from "./[slug]/page"


export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">TechCorp Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      </div>
    </div>
  )
}

