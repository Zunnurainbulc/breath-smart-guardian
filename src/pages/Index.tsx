
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Activity, 
  Heart, 
  Thermometer, 
  Wind, 
  AlertTriangle, 
  CheckCircle, 
  Phone, 
  Stethoscope,
  Pill,
  Wifi,
  WifiOff,
  TrendingUp,
  TrendingDown,
  Users
} from "lucide-react";
import HealthDashboard from "@/components/HealthDashboard";
import DeviceStatus from "@/components/DeviceStatus";
import MedicationTracker from "@/components/MedicationTracker";
import EnvironmentalMonitor from "@/components/EnvironmentalMonitor";
import DoctorPortal from "@/components/DoctorPortal";
import PredictionAlerts from "@/components/PredictionAlerts";

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RespirateAI</h1>
                <p className="text-sm text-gray-600">Respiratory Health Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Wifi className="h-3 w-3 mr-1" />
                All Devices Connected
              </Badge>
              <Button size="sm" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Emergency
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white rounded-lg shadow-sm">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">AI Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="devices" className="flex items-center space-x-2">
              <Wifi className="h-4 w-4" />
              <span className="hidden sm:inline">Devices</span>
            </TabsTrigger>
            <TabsTrigger value="medication" className="flex items-center space-x-2">
              <Pill className="h-4 w-4" />
              <span className="hidden sm:inline">Medication</span>
            </TabsTrigger>
            <TabsTrigger value="environment" className="flex items-center space-x-2">
              <Wind className="h-4 w-4" />
              <span className="hidden sm:inline">Environment</span>
            </TabsTrigger>
            <TabsTrigger value="doctor" className="flex items-center space-x-2">
              <Stethoscope className="h-4 w-4" />
              <span className="hidden sm:inline">Doctor</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <HealthDashboard />
          </TabsContent>

          <TabsContent value="predictions" className="space-y-6">
            <PredictionAlerts />
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <DeviceStatus />
          </TabsContent>

          <TabsContent value="medication" className="space-y-6">
            <MedicationTracker />
          </TabsContent>

          <TabsContent value="environment" className="space-y-6">
            <EnvironmentalMonitor />
          </TabsContent>

          <TabsContent value="doctor" className="space-y-6">
            <DoctorPortal />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
