import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectRiskManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Project Risk Management</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Purpose</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Project Risk Management includes the processes of conducting risk management planning, identification,
            analysis, response planning, response implementation, and monitoring risk on a project. The objectives of
            project risk management are to increase the probability and/or impact of positive risks and to decrease the
            probability and/or impact of negative risks, in order to optimize project success.
          </CardDescription>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Processes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan Risk Management</li>
            <li>Identify Risks</li>
            <li>Perform Qualitative Risk Analysis</li>
            <li>Perform Quantitative Risk Analysis</li>
            <li>Plan Risk Responses</li>
            <li>Implement Risk Responses</li>
            <li>Monitor Risks</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

