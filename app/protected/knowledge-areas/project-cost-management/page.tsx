import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectCostManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Cost Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Cost Management includes the processes involved in planning, estimating, budgeting, financing,
            funding, managing, and controlling costs so that the project can be completed within the approved budget. It
            focuses on the cost of the resources needed to complete project activities.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Cost Management</li>
            <li>Estimate Costs</li>
            <li>Determine Budget</li>
            <li>Control Costs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

