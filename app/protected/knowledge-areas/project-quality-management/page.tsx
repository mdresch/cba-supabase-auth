import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectQualityManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Quality Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Quality Management includes the processes for incorporating the organization's quality policy
            regarding planning, managing, and controlling project and product quality requirements to meet stakeholders'
            expectations. It aims to ensure that the project will satisfy the needs for which it was undertaken.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Quality Management</li>
            <li>Manage Quality</li>
            <li>Control Quality</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

