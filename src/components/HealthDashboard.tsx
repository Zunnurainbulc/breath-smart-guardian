
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Heart, Activity, Wind, Thermometer, TrendingUp, TrendingDown } from "lucide-react";

const HealthDashboard = () => {
  const vitalSigns = {
    heartRate: 72,
    oxygenSaturation: 98,
    respiratoryRate: 16,
    peakFlow: 450
  };

  const chartData = [
    { time: '6:00', heartRate: 68, oxygenSat: 97, respiratoryRate: 14 },
    { time: '9:00', heartRate: 72, oxygenSat: 98, respiratoryRate: 16 },
    { time: '12:00', heartRate: 75, oxygenSat: 97, respiratoryRate: 18 },
    { time: '15:00', heartRate: 78, oxygenSat: 96, respiratoryRate: 20 },
    { time: '18:00', heartRate: 74, oxygenSat: 98, respiratoryRate: 16 },
    { time: '21:00', heartRate: 70, oxygenSat: 98, respiratoryRate: 15 }
  ];

  const getVitalStatus = (value: number, normal: [number, number]) => {
    if (value < normal[0] || value > normal[1]) {
      return { status: "warning", color: "yellow" };
    }
    return { status: "normal", color: "green" };
  };

  return (
    <div className="space-y-6">
      {/* Current Vitals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-800">Heart Rate</CardTitle>
            <Heart className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900">{vitalSigns.heartRate}</div>
            <p className="text-xs text-red-700">bpm</p>
            <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
              Normal
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Oxygen Saturation</CardTitle>
            <Activity className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">{vitalSigns.oxygenSaturation}%</div>
            <p className="text-xs text-blue-700">SpO2</p>
            <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
              Excellent
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Respiratory Rate</CardTitle>
            <Wind className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">{vitalSigns.respiratoryRate}</div>
            <p className="text-xs text-green-700">breaths/min</p>
            <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
              Normal
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Peak Flow</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">{vitalSigns.peakFlow}</div>
            <p className="text-xs text-purple-700">L/min</p>
            <Badge variant="outline" className="mt-2 bg-green-50 text-green-700 border-green-200">
              Good
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Heart Rate Trends</span>
            </CardTitle>
            <CardDescription>24-hour monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                  <XAxis dataKey="time" className="text-gray-600" />
                  <YAxis className="text-gray-600" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="heartRate" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <span>Oxygen Saturation</span>
            </CardTitle>
            <CardDescription>Real-time SpO2 levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                  <XAxis dataKey="time" className="text-gray-600" />
                  <YAxis domain={[94, 100]} className="text-gray-600" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="oxygenSat" 
                    stroke="#3b82f6" 
                    fill="#93c5fd"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Respiratory Health Score */}
      <Card>
        <CardHeader>
          <CardTitle>Respiratory Health Score</CardTitle>
          <CardDescription>AI-calculated overall respiratory wellness</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Overall Score</span>
            <span className="text-2xl font-bold text-green-600">8.5/10</span>
          </div>
          <Progress value={85} className="h-3" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">92%</div>
              <div className="text-sm text-gray-600">Lung Function</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">88%</div>
              <div className="text-sm text-gray-600">Medication Adherence</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-purple-600">76%</div>
              <div className="text-sm text-gray-600">Environmental Score</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthDashboard;
