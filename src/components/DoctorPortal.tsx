
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { 
  Stethoscope, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  Phone, 
  Video,
  Send,
  Download
} from "lucide-react";

const DoctorPortal = () => {
  const patientData = {
    name: "Sarah Johnson",
    age: 34,
    condition: "Moderate Asthma",
    lastVisit: "March 15, 2024",
    nextAppointment: "April 20, 2024",
    riskLevel: "Medium"
  };

  const healthTrends = [
    { date: '3/1', peakFlow: 420, adherence: 85, symptoms: 2 },
    { date: '3/8', peakFlow: 445, adherence: 90, symptoms: 1 },
    { date: '3/15', peakFlow: 410, adherence: 75, symptoms: 3 },
    { date: '3/22', peakFlow: 455, adherence: 95, symptoms: 1 },
    { date: '3/29', peakFlow: 440, adherence: 88, symptoms: 2 }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "medication",
      message: "Missed rescue inhaler dose at 2:00 PM",
      timestamp: "2 hours ago",
      severity: "medium"
    },
    {
      id: 2,
      type: "environmental",
      message: "High pollen count detected in patient's area",
      timestamp: "4 hours ago",
      severity: "low"
    },
    {
      id: 3,
      type: "symptoms",
      message: "Patient reported increased shortness of breath",
      timestamp: "1 day ago",
      severity: "high"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-600 bg-red-50 border-red-200";
      case "medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low": return "text-blue-600 bg-blue-50 border-blue-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Patient Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Patient Overview</span>
            </span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4 mr-2" />
                Video Call
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="font-semibold text-blue-900">{patientData.name}</div>
              <div className="text-sm text-blue-700">Age: {patientData.age}</div>
              <div className="text-sm text-blue-700">{patientData.condition}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-semibold text-green-900">Last Visit</div>
              <div className="text-sm text-green-700">{patientData.lastVisit}</div>
              <Badge className="mt-1 bg-green-100 text-green-800 border-green-200">
                Recent Checkup
              </Badge>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="font-semibold text-purple-900">Next Appointment</div>
              <div className="text-sm text-purple-700">{patientData.nextAppointment}</div>
              <Button variant="outline" size="sm" className="mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                Reschedule
              </Button>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="font-semibold text-orange-900">Risk Level</div>
              <Badge 
                variant="outline" 
                className="mt-1 bg-yellow-100 text-yellow-800 border-yellow-200"
              >
                {patientData.riskLevel} Risk
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span>4-Week Health Trends</span>
          </CardTitle>
          <CardDescription>Patient's respiratory health metrics over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={healthTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <XAxis dataKey="date" className="text-gray-600" />
                <YAxis className="text-gray-600" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="peakFlow" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Peak Flow (L/min)"
                />
                <Line 
                  type="monotone" 
                  dataKey="adherence" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Medication Adherence (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600">Avg Peak Flow</div>
              <div className="text-lg font-semibold text-blue-600">434 L/min</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Adherence Rate</div>
              <div className="text-lg font-semibold text-green-600">87%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Symptom Days</div>
              <div className="text-lg font-semibold text-orange-600">9 days</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts and Communication */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span>Recent Alerts</span>
            </CardTitle>
            <CardDescription>AI-generated notifications and patient reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-3 border rounded-lg ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium capitalize">{alert.type} Alert</div>
                    <p className="text-sm mt-1">{alert.message}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {alert.timestamp}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Alerts
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <span>Patient Communication</span>
            </CardTitle>
            <CardDescription>Send messages and treatment updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Message to Patient</label>
              <Textarea 
                placeholder="Type your message here..."
                className="min-h-[100px]"
              />
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Attach File
              </Button>
            </div>
            <div className="pt-4 border-t">
              <div className="text-sm font-medium mb-2">Quick Actions</div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">Update Prescription</Button>
                <Button variant="outline" size="sm">Schedule Follow-up</Button>
                <Button variant="outline" size="sm">Request Lab Work</Button>
                <Button variant="outline" size="sm">Emergency Protocol</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Treatment Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Stethoscope className="h-5 w-5 text-purple-500" />
              <span>Current Treatment Plan</span>
            </span>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </CardTitle>
          <CardDescription>Active medications and care instructions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Current Medications</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-medium">Albuterol HFA Inhaler</div>
                  <div className="text-sm text-gray-600">2 puffs every 6 hours as needed</div>
                  <Badge className="mt-1 bg-red-100 text-red-800 border-red-200">Rescue</Badge>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="font-medium">Budesonide Inhaler</div>
                  <div className="text-sm text-gray-600">200 mcg twice daily</div>
                  <Badge className="mt-1 bg-blue-100 text-blue-800 border-blue-200">Controller</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Care Instructions</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Monitor peak flow daily before medication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Avoid known triggers (dust, pollen, smoke)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Use spacer with MDI inhalers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Contact doctor if peak flow drops below 350 L/min</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorPortal;
