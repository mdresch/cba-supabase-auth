import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectStakeholderManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Stakeholder Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Stakeholder Management includes the processes required to identify the people, groups, or
            organizations that could impact or be impacted by the project, analyze stakeholder expectations and their
            impact on the project, and develop appropriate management strategies for effectively engaging stakeholders
            in project decisions and execution.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identify Stakeholders</li>
            <li>Plan Stakeholder Engagement</li>
            <li>Manage Stakeholder Engagement</li>
            <li>Monitor Stakeholder Engagement</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

