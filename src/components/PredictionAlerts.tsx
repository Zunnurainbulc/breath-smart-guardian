
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { 
  AlertTriangle, 
  TrendingUp, 
  Brain, 
  Shield, 
  Wind, 
  Activity, 
  Bell, 
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";

const PredictionAlerts = () => {
  const riskAssessment = {
    overall: 72,
    environmental: 85,
    medication: 45,
    symptoms: 60
  };

  const predictions = [
    {
      id: 1,
      type: "asthma_attack",
      probability: 78,
      timeframe: "Next 24 hours",
      confidence: 85,
      triggers: ["High pollen count", "Missed medication", "Weather change"],
      severity: "high",
      action: "Take preventive medication and avoid outdoor activities"
    },
    {
      id: 2,
      type: "copd_exacerbation",
      probability: 34,
      timeframe: "Next 72 hours",
      confidence: 72,
      triggers: ["Air quality decline", "Temperature drop"],
      severity: "medium",
      action: "Monitor symptoms closely and have rescue inhaler ready"
    },
    {
      id: 3,
      type: "medication_reminder",
      probability: 92,
      timeframe: "Next 2 hours",
      confidence: 95,
      triggers: ["Adherence pattern", "Time since last dose"],
      severity: "low",
      action: "Prepare controller medication for scheduled dose"
    }
  ];

  const trendData = [
    { day: 'Mon', risk: 45, actual: 40 },
    { day: 'Tue', risk: 52, actual: 48 },
    { day: 'Wed', risk: 68, actual: 65 },
    { day: 'Thu', risk: 75, actual: 72 },
    { day: 'Fri', risk: 62, actual: 58 },
    { day: 'Sat', risk: 48, actual: 45 },
    { day: 'Sun', risk: 35, actual: 32 }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "border-red-500 bg-red-50";
      case "medium": return "border-yellow-500 bg-yellow-50";
      case "low": return "border-blue-500 bg-blue-50";
      default: return "border-gray-500 bg-gray-50";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high": return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "medium": return <Bell className="h-5 w-5 text-yellow-600" />;
      case "low": return <CheckCircle className="h-5 w-5 text-blue-600" />;
      default: return <Bell className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-600" />
            <span>AI Risk Assessment</span>
          </CardTitle>
          <CardDescription>Real-time analysis of respiratory health indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{riskAssessment.overall}%</div>
              <div className="text-sm text-purple-700">Overall Risk</div>
              <Progress value={riskAssessment.overall} className="mt-2 h-2" />
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{riskAssessment.environmental}%</div>
              <div className="text-sm text-orange-700">Environmental</div>
              <Progress value={riskAssessment.environmental} className="mt-2 h-2" />
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{riskAssessment.medication}%</div>
              <div className="text-sm text-blue-700">Medication</div>
              <Progress value={riskAssessment.medication} className="mt-2 h-2" />
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{riskAssessment.symptoms}%</div>
              <div className="text-sm text-green-700">Symptoms</div>
              <Progress value={riskAssessment.symptoms} className="mt-2 h-2" />
            </div>
          </div>
          
          <Alert className="border-orange-200 bg-orange-50">
            <Zap className="h-4 w-4 text-orange-600" />
            <AlertTitle className="text-orange-800">AI Alert</AlertTitle>
            <AlertDescription className="text-orange-700">
              Elevated risk detected due to high environmental triggers and missed medication. 
              Consider taking preventive action.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Active Predictions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Active Predictions</h2>
        {predictions.map((prediction) => (
          <Card key={prediction.id} className={`border-l-4 ${getSeverityColor(prediction.severity)}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getSeverityIcon(prediction.severity)}
                  <div>
                    <CardTitle className="capitalize">
                      {prediction.type.replace('_', ' ')} Prediction
                    </CardTitle>
                    <CardDescription>{prediction.timeframe}</CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{prediction.probability}%</div>
                  <div className="text-sm text-gray-600">Probability</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Confidence Level</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {prediction.confidence}% Confidence
                </Badge>
              </div>
              
              <div>
                <div className="text-sm font-medium mb-2">Contributing Factors:</div>
                <div className="flex flex-wrap gap-2">
                  {prediction.triggers.map((trigger, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {trigger}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-blue-900">Recommended Action</div>
                    <p className="text-sm text-blue-700">{prediction.action}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Action Taken
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Clock className="h-4 w-4 mr-2" />
                  Snooze 1hr
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Prediction Accuracy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span>AI Prediction Accuracy</span>
          </CardTitle>
          <CardDescription>Comparing AI predictions vs actual events over the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <XAxis dataKey="day" className="text-gray-600" />
                <YAxis className="text-gray-600" />
                <Tooltip />
                <Bar dataKey="risk" fill="#3b82f6" name="Predicted Risk" radius={[2, 2, 0, 0]} />
                <Bar dataKey="actual" fill="#10b981" name="Actual Events" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
              <div className="text-lg font-semibold text-green-600">94.2%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">False Positives</div>
              <div className="text-lg font-semibold text-yellow-600">3.8%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Missed Events</div>
              <div className="text-lg font-semibold text-red-600">2.0%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pattern Recognition */}
      <Card>
        <CardHeader>
          <CardTitle>AI Pattern Recognition</CardTitle>
          <CardDescription>Learned patterns from your respiratory health data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Wind className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-900">Environmental Patterns</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Symptoms worsen on high pollen days (correlation: 87%)</li>
                <li>• Air quality below 70 AQI triggers events</li>
                <li>• Morning hours show highest risk (6-10 AM)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Activity className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-900">Behavioral Patterns</span>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Medication adherence drops on weekends</li>
                <li>• Exercise improves next-day lung function</li>
                <li>• Sleep quality correlates with peak flow</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionAlerts;
