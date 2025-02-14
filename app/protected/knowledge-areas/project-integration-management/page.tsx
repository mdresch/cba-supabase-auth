import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectIntegrationManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Integration Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Integration Management ensures that the various components of the project are properly coordinated.
            It involves making choices about resource allocation, balancing competing objectives and alternatives, and
            managing the interdependencies among the project management knowledge areas.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Develop Project Charter</li>
            <li>Develop Project Management Plan</li>
            <li>Direct and Manage Project Work</li>
            <li>Manage Project Knowledge</li>
            <li>Monitor and Control Project Work</li>
            <li>Perform Integrated Change Control</li>
            <li>Close Project or Phase</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

