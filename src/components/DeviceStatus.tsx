
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wifi, WifiOff, Battery, Bluetooth, Smartphone, Watch, Wind, Activity, Settings } from "lucide-react";

const DeviceStatus = () => {
  const devices = [
    {
      id: 1,
      name: "Smart Inhaler Pro",
      type: "inhaler",
      status: "connected",
      battery: 78,
      lastSync: "2 minutes ago",
      icon: Wind,
      color: "blue"
    },
    {
      id: 2,
      name: "Pulse Oximeter X1",
      type: "oximeter",
      status: "connected",
      battery: 92,
      lastSync: "30 seconds ago",
      icon: Activity,
      color: "green"
    },
    {
      id: 3,
      name: "Air Quality Monitor",
      type: "air_monitor",
      status: "connected",
      battery: 65,
      lastSync: "1 minute ago",
      icon: Wind,
      color: "purple"
    },
    {
      id: 4,
      name: "Fitness Tracker",
      type: "wearable",
      status: "disconnected",
      battery: 23,
      lastSync: "2 hours ago",
      icon: Watch,
      color: "orange"
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === "connected") {
      return (
        <Badge className="bg-green-100 text-green-800 border-green-200">
          <Wifi className="h-3 w-3 mr-1" />
          Connected
        </Badge>
      );
    }
    return (
      <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200">
        <WifiOff className="h-3 w-3 mr-1" />
        Disconnected
      </Badge>
    );
  };

  const getBatteryColor = (battery: number) => {
    if (battery > 50) return "text-green-600";
    if (battery > 20) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Connected Devices</span>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Manage Devices
            </Button>
          </CardTitle>
          <CardDescription>Monitor and manage your respiratory health devices</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {devices.map((device) => {
          const IconComponent = device.icon;
          return (
            <Card key={device.id} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-${device.color}-100`}>
                      <IconComponent className={`h-5 w-5 text-${device.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{device.name}</CardTitle>
                      <CardDescription>Last sync: {device.lastSync}</CardDescription>
                    </div>
                  </div>
                  {getStatusBadge(device.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Battery className={`h-4 w-4 ${getBatteryColor(device.battery)}`} />
                    <span className="text-sm font-medium">Battery</span>
                  </div>
                  <span className={`text-sm font-semibold ${getBatteryColor(device.battery)}`}>
                    {device.battery}%
                  </span>
                </div>
                <Progress 
                  value={device.battery} 
                  className={`h-2 ${device.battery > 20 ? 'bg-green-100' : 'bg-red-100'}`} 
                />
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Bluetooth className="h-4 w-4 mr-2" />
                    Sync
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Device Data Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Device Activity</CardTitle>
          <CardDescription>Data collected from your connected devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-blue-700">Inhaler Uses</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1,440</div>
              <div className="text-sm text-green-700">SpO2 Readings</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">24</div>
              <div className="text-sm text-purple-700">Air Quality Checks</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">8,420</div>
              <div className="text-sm text-orange-700">Steps Taken</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connection Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Add New Device</CardTitle>
          <CardDescription>Connect additional respiratory monitoring devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Wind className="h-6 w-6" />
              <span>Smart Inhaler</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Activity className="h-6 w-6" />
              <span>Pulse Oximeter</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Smartphone className="h-6 w-6" />
              <span>Air Monitor</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceStatus;
