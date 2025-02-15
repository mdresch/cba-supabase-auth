import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Shield, Zap, BarChart, BookOpen } from "lucide-react"


const knowledgeAreas = [
    {
      title: "Project Integration Management",
      description: "Coordinating all aspects of a project to ensure its success.",
      href: "/protected/knowledge-areas/project-integration-management",
    },
    {
      title: "Project Scope Management",
      description: "Defining and controlling what is and is not included in the project.",
      href: "/protected/knowledge-areas/project-scope-management",
    },
    {
      title: "Project Schedule Management",
      description: "Managing the timely completion of the project.",
      href: "/protected/knowledge-areas/project-schedule-management",
    },
    {
      title: "Project Cost Management",
      description: "Planning, estimating, budgeting, financing, funding, and controlling costs.",
      href: "/protected/knowledge-areas/project-cost-management",
    },
    {
      title: "Project Quality Management",
      description: "Ensuring that the project satisfies the needs for which it was undertaken.",
      href: "/protected/knowledge-areas/project-quality-management",
    },
    {
      title: "Project Resource Management",
      description: "Identifying, acquiring, and managing resources needed for project success.",
      href: "/protected/knowledge-areas/project-resource-management",
    },
    {
      title: "Project Communications Management",
      description: "Ensuring timely and appropriate generation, collection, and distribution of information.",
      href: "/protected/knowledge-areas/project-communications-management",
    },
    {
      title: "Project Risk Management",
      description: "Identifying, analyzing, and responding to risks throughout the project lifecycle.",
      href: "/protected/knowledge-areas/project-risk-management",
    },
    {
      title: "Project Procurement Management",
      description: "Acquiring goods and services from outside the performing organization.",
      href: "/protected/knowledge-areas/project-procurement-management",
    },
    {
      title: "Project Stakeholder Management",
      description: "Identifying and working with people who have an interest in the project.",
      href: "/protected/knowledge-areas/project-stakeholder-management",
    },
  ]

export default function KnowledgeAreaSection() {
  return (
    <div>
    <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Knowledge Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgeAreas.map((area, index) => (
              <Card key={index} className="shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <BookOpen className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{area.description}</CardDescription>
                  <Link href={area.href} className="text-primary hover:underline mt-2 inline-block">
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