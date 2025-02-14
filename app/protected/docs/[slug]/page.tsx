import fs from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"
import matter from "gray-matter"
import Image from "next/image"

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "app/docs/content"))

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }))
}

export default async function Doc({ params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "app/docs/content", `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(fileContents)

  return (
    <div className="container mx-auto px-4 py-12">
      <Image
        src={data.image || "/placeholder.svg"}
        alt={data.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover mb-8 rounded-lg"
      />
      <article className="prose lg:prose-xl mx-auto">
        <MDXRemote source={content} />
      </article>
    </div>
  )
}

