
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Pill, Clock, CheckCircle, AlertCircle, Calendar, Plus, Bell } from "lucide-react";

const MedicationTracker = () => {
  const medications = [
    {
      id: 1,
      name: "Albuterol Inhaler",
      dosage: "2 puffs",
      frequency: "Every 6 hours",
      nextDose: "2:00 PM",
      taken: true,
      type: "rescue",
      color: "#ef4444"
    },
    {
      id: 2,
      name: "Budesonide",
      dosage: "200 mcg",
      frequency: "Twice daily",
      nextDose: "8:00 PM",
      taken: false,
      type: "controller",
      color: "#3b82f6"
    },
    {
      id: 3,
      name: "Prednisone",
      dosage: "10 mg",
      frequency: "Once daily",
      nextDose: "9:00 AM",
      taken: true,
      type: "steroid",
      color: "#8b5cf6"
    }
  ];

  const adherenceData = [
    { name: "Taken", value: 85, color: "#10b981" },
    { name: "Missed", value: 15, color: "#ef4444" }
  ];

  const weeklyData = [
    { day: "Mon", adherence: 90 },
    { day: "Tue", adherence: 85 },
    { day: "Wed", adherence: 100 },
    { day: "Thu", adherence: 75 },
    { day: "Fri", adherence: 95 },
    { day: "Sat", adherence: 80 },
    { day: "Sun", adherence: 90 }
  ];

  const handleMedicationTaken = (medicationId: number) => {
    console.log(`Medication ${medicationId} marked as taken`);
  };

  return (
    <div className="space-y-6">
      {/* Today's Medications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Pill className="h-5 w-5 text-blue-600" />
              <span>Today's Medications</span>
            </span>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Medication
            </Button>
          </CardTitle>
          <CardDescription>Track your daily medication schedule</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {medications.map((med) => (
            <div key={med.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <Checkbox 
                  checked={med.taken}
                  onCheckedChange={() => handleMedicationTaken(med.id)}
                  className="h-5 w-5"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold">{med.name}</h3>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        med.type === 'rescue' ? 'bg-red-50 text-red-700 border-red-200' :
                        med.type === 'controller' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        'bg-purple-50 text-purple-700 border-purple-200'
                      }`}
                    >
                      {med.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{med.dosage} • {med.frequency}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">{med.nextDose}</span>
                </div>
                {med.taken ? (
                  <Badge className="mt-1 bg-green-100 text-green-800 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Taken
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mt-1 bg-yellow-50 text-yellow-800 border-yellow-200">
                    <Bell className="h-3 w-3 mr-1" />
                    Pending
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Adherence Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Medication Adherence</CardTitle>
            <CardDescription>This month's compliance rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-gray-600">Overall Adherence</div>
              </div>
              <div className="h-32 w-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={adherenceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={50}
                      dataKey="value"
                    >
                      {adherenceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Taken on time</span>
                </span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Missed doses</span>
                </span>
                <span className="font-medium">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Adherence Trend</CardTitle>
            <CardDescription>Daily compliance rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                  <XAxis dataKey="day" className="text-gray-600" />
                  <YAxis className="text-gray-600" />
                  <Tooltip />
                  <Bar dataKey="adherence" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Medication Reminders */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Reminders</CardTitle>
          <CardDescription>AI-powered medication alerts and suggestions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Upcoming Dose Reminder</h4>
                <p className="text-sm text-blue-700">Budesonide 200 mcg due in 30 minutes (8:00 PM)</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900">AI Suggestion</h4>
                <p className="text-sm text-yellow-700">Based on your recent air quality exposure, consider carrying your rescue inhaler today.</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-900">Great Progress!</h4>
                <p className="text-sm text-green-700">You've maintained 90%+ adherence for the past week. Keep up the excellent work!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicationTracker;
