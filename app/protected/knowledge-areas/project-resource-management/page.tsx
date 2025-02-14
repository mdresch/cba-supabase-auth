import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectResourceManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Resource Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Resource Management includes the processes to identify, acquire, and manage the resources needed for
            the successful completion of the project. It ensures that the right resources are available to the project
            manager and project team at the right time and place.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Resource Management</li>
            <li>Estimate Activity Resources</li>
            <li>Acquire Resources</li>
            <li>Develop Team</li>
            <li>Manage Team</li>
            <li>Control Resources</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

