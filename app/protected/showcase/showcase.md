const allProducts: Product[] = [
  {
    id: 1,
    name: "TechAI",
    category: "AI",
    description: "AI-powered business analytics",
    image: "/placeholder.svg?height=200&width=300",
    details: "TechAI uses advanced machine learning algorithms to provide real-time insights into your business data.",
  },
  {
    id: 2,
    name: "CloudScale",
    category: "Infrastructure",
    description: "Scalable cloud infrastructure",
    image: "/placeholder.svg?height=200&width=300",
    details: "CloudScale offers a flexible, high-performance cloud platform that grows with your business needs.",
  },
  {
    id: 3,
    name: "SecureGuard",
    category: "Security",
    description: "Advanced cybersecurity solution",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "SecureGuard provides state-of-the-art protection against the latest cyber threats, ensuring your data remains safe.",
  },
  {
    id: 4,
    name: "DataSync",
    category: "Data",
    description: "Real-time data synchronization",
    image: "/placeholder.svg?height=200&width=300",
    details: "DataSync ensures your data is always up-to-date across all your systems and devices.",
  },
  {
    id: 5,
    name: "AIAssist",
    category: "AI",
    description: "AI-powered virtual assistant",
    image: "/placeholder.svg?height=200&width=300",
    details: "AIAssist provides intelligent virtual assistance to streamline your daily tasks and boost productivity.",
  },
  {
    id: 6,
    name: "CloudBackup",
    category: "Infrastructure",
    description: "Automated cloud backup solution",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "CloudBackup ensures your critical data is always safe and easily recoverable with automated cloud backups.",
  },
  {
    id: 7,
    name: "CyberShield",
    category: "Security",
    description: "Comprehensive cybersecurity suite",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "CyberShield offers a full suite of cybersecurity tools to protect your business from evolving digital threats.",
  },
  {
    id: 8,
    name: "DataViz",
    category: "Data",
    description: "Advanced data visualization tool",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "DataViz transforms complex data into clear, actionable insights through powerful visualization techniques.",
  },
  {
    id: 9,
    name: "DataViz",
    category: "Data",
    description: "Advanced data visualization tool",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "DataViz transforms complex data into clear, actionable insights through powerful visualization techniques.",
  },
  {
    id: 10,
    name: "DataViz",
    category: "Data",
    description: "Advanced data visualization tool",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "DataViz transforms complex data into clear, actionable insights through powerful visualization techniques.",
  },
  {
    id: 11,
    name: "DataViz",
    category: "Data",
    description: "Advanced data visualization tool",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "DataViz transforms complex data into clear, actionable insights through powerful visualization techniques.",
  },
  {
    id: 12,
    name: "DataViz",
    category: "Data",
    description: "Advanced data visualization tool",
    image: "/placeholder.svg?height=200&width=300",
    details:
      "DataViz transforms complex data into clear, actionable insights through powerful visualization techniques.",
  },
];

// Define the product type
type Product = {
  id: number
  name: string
  category: string
  description: string
  image: string
  details: string
};