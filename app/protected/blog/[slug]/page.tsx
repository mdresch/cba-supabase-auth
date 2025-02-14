import { notFound } from "next/navigation"

const blogPosts = {
  "future-of-ai-in-business": {
    title: "The Future of AI in Business",
    date: "2023-06-01",
    content: `
      # The Future of AI in Business

      Artificial Intelligence (AI) is rapidly transforming the business landscape across various industries. In this post, we'll explore some of the key ways AI is being used to drive innovation and efficiency in modern businesses.

      ## 1. Predictive Analytics

      AI-powered predictive analytics tools are helping businesses make more informed decisions by analyzing vast amounts of data and identifying patterns that humans might miss.

      ## 2. Chatbots and Customer Service

      AI chatbots are revolutionizing customer service by providing instant, 24/7 support to customers, freeing up human agents to handle more complex issues.

      ## 3. Personalization

      AI algorithms are enabling businesses to deliver highly personalized experiences to their customers, from product recommendations to tailored marketing messages.

      As AI continues to evolve, we can expect to see even more innovative applications in the business world. Stay tuned for more insights on this exciting topic!
    `,
  },
  "scaling-infrastructure": {
    title: "Scaling Your Infrastructure: Best Practices",
    date: "2023-05-15",
    content: `
      # Scaling Your Infrastructure: Best Practices

      As your business grows, so does the demand on your IT infrastructure. This post will cover best practices for scaling your infrastructure effectively.

      ## 1. Use Cloud Services

      Cloud services offer flexibility and scalability that can grow with your business needs.

      ## 2. Implement Load Balancing

      Distribute traffic across multiple servers to improve performance and reliability.

      ## 3. Optimize Database Performance

      Use caching, indexing, and query optimization to keep your databases running smoothly as they grow.
    `,
  },
  "cybersecurity-trends-2023": {
    title: "Cybersecurity Trends in 2023",
    date: "2023-04-30",
    content: `
      # Cybersecurity Trends in 2023

      Stay ahead of the curve with these emerging cybersecurity trends for 2023.

      ## 1. Zero Trust Security

      Adopt a "never trust, always verify" approach to security, regardless of whether the connection is inside or outside the network perimeter.

      ## 2. AI-Powered Threat Detection

      Leverage AI and machine learning to detect and respond to threats faster and more accurately.

      ## 3. Cloud-Native Security

      As more businesses move to the cloud, cloud-native security solutions are becoming increasingly important.
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

