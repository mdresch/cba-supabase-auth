import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectProcurementManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Procurement Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Procurement Management includes the processes necessary to purchase or acquire products, services,
            or results needed from outside the project team. It involves managing procurement processes, controlling
            contracts, and making changes as needed. This knowledge area also includes managing any contract issued by
            an outside organization that is acquiring deliverables from the project.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Procurement Management</li>
            <li>Conduct Procurements</li>
            <li>Control Procurements</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

