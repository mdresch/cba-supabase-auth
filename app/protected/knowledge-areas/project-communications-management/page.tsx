import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectCommunicationsManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Communications Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Communications Management includes the processes required to ensure timely and appropriate planning,
            collection, creation, distribution, storage, retrieval, management, control, monitoring, and ultimate
            disposition of project information. Effective communication creates a bridge between diverse stakeholders
            who may have different cultural and organizational backgrounds.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Communications Management</li>
            <li>Manage Communications</li>
            <li>Monitor Communications</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

