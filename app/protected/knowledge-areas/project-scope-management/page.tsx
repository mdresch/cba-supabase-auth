import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectScopeManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Scope Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Scope Management ensures that the project includes all the work required, and only the work
            required, to complete the project successfully. It defines and controls what is and is not included in the
            project.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Scope Management</li>
            <li>Collect Requirements</li>
            <li>Define Scope</li>
            <li>Create WBS (Work Breakdown Structure)</li>
            <li>Validate Scope</li>
            <li>Control Scope</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

