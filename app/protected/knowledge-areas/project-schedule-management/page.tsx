import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectScheduleManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Schedule Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Schedule Management includes the processes required to manage the timely completion of the project.
            It involves defining activities, sequencing them, estimating their durations, and developing and controlling
            the project schedule.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Schedule Management</li>
            <li>Define Activities</li>
            <li>Sequence Activities</li>
            <li>Estimate Activity Durations</li>
            <li>Develop Schedule</li>
            <li>Control Schedule</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

