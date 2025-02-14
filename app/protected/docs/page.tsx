import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface DocMeta {
  slug: string
  title: string
  description: string
  image: string
}

function getDocMeta(): DocMeta[] {
  const docsDirectory = path.join(process.cwd(), "app/docs/content")
  const filenames = fs.readdirSync(docsDirectory)

  const docs = filenames.map((filename) => {
    const filePath = path.join(docsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      image: data.image,
    }
  })

  return docs
}

export default function DocsIndex() {
  const docs = getDocMeta()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Documentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {docs.map((doc) => (
          <Card key={doc.slug} className="overflow-hidden">
            <Image
              src={doc.image || "/placeholder.svg"}
              alt={doc.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{doc.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{doc.description}</CardDescription>
              <Link href={`/docs/${doc.slug}`} className="text-primary hover:underline mt-2 inline-block">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

