
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Wind, Thermometer, Droplets, Sun, AlertTriangle, Leaf, Eye, MapPin } from "lucide-react";

const EnvironmentalMonitor = () => {
  const currentConditions = {
    airQuality: 68,
    temperature: 72,
    humidity: 45,
    pollenCount: 3,
    uvIndex: 6,
    windSpeed: 8
  };

  const airQualityData = [
    { time: '00:00', aqi: 45, pm25: 12, pm10: 18 },
    { time: '06:00', aqi: 52, pm25: 15, pm10: 22 },
    { time: '12:00', aqi: 68, pm25: 22, pm10: 35 },
    { time: '18:00', aqi: 74, pm25: 28, pm10: 42 },
    { time: '24:00', aqi: 58, pm25: 18, pm10: 28 }
  ];

  const getAQIStatus = (aqi: number) => {
    if (aqi <= 50) return { status: "Good", color: "green", description: "Air quality is satisfactory" };
    if (aqi <= 100) return { status: "Moderate", color: "yellow", description: "Sensitive groups may experience minor symptoms" };
    if (aqi <= 150) return { status: "Unhealthy for Sensitive Groups", color: "orange", description: "Sensitive individuals should limit outdoor exposure" };
    return { status: "Unhealthy", color: "red", description: "Everyone should limit outdoor activities" };
  };

  const getPollenLevel = (count: number) => {
    if (count <= 2) return { level: "Low", color: "green" };
    if (count <= 4) return { level: "Medium", color: "yellow" };
    return { level: "High", color: "red" };
  };

  const aqiStatus = getAQIStatus(currentConditions.airQuality);
  const pollenStatus = getPollenLevel(currentConditions.pollenCount);

  return (
    <div className="space-y-6">
      {/* Current Environmental Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className={`bg-gradient-to-br from-${aqiStatus.color}-50 to-${aqiStatus.color}-100 border-${aqiStatus.color}-200`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Air Quality</CardTitle>
            <Wind className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentConditions.airQuality}</div>
            <p className="text-xs">AQI</p>
            <Badge 
              variant="outline" 
              className={`mt-2 bg-${aqiStatus.color}-50 text-${aqiStatus.color}-700 border-${aqiStatus.color}-200`}
            >
              {aqiStatus.status}
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">{currentConditions.temperature}°F</div>
            <p className="text-xs text-orange-700">Comfortable</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
            <Droplets className="h-4 w-4 text-cyan-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-900">{currentConditions.humidity}%</div>
            <p className="text-xs text-cyan-700">Optimal</p>
          </CardContent>
        </Card>

        <Card className={`bg-gradient-to-br from-${pollenStatus.color}-50 to-${pollenStatus.color}-100 border-${pollenStatus.color}-200`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pollen</CardTitle>
            <Leaf className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentConditions.pollenCount}</div>
            <p className="text-xs">Count/m³</p>
            <Badge 
              variant="outline" 
              className={`mt-2 bg-${pollenStatus.color}-50 text-${pollenStatus.color}-700 border-${pollenStatus.color}-200`}
            >
              {pollenStatus.level}
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">UV Index</CardTitle>
            <Sun className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900">{currentConditions.uvIndex}</div>
            <p className="text-xs text-yellow-700">High</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
            <Wind className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{currentConditions.windSpeed}</div>
            <p className="text-xs text-gray-700">mph</p>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Alerts */}
      {currentConditions.airQuality > 100 && (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-800">Air Quality Warning</AlertTitle>
          <AlertDescription className="text-orange-700">
            {aqiStatus.description}. Consider staying indoors and using your air purifier.
          </AlertDescription>
        </Alert>
      )}

      {/* Air Quality Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wind className="h-5 w-5 text-blue-500" />
            <span>24-Hour Air Quality Trends</span>
          </CardTitle>
          <CardDescription>Air Quality Index and pollutant levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={airQualityData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <XAxis dataKey="time" className="text-gray-600" />
                <YAxis className="text-gray-600" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="aqi" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="AQI"
                />
                <Line 
                  type="monotone" 
                  dataKey="pm25" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  name="PM2.5"
                />
                <Line 
                  type="monotone" 
                  dataKey="pm10" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  name="PM10"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600">Current AQI</div>
              <div className="text-lg font-semibold text-blue-600">{currentConditions.airQuality}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">PM2.5</div>
              <div className="text-lg font-semibold text-red-600">22 μg/m³</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">PM10</div>
              <div className="text-lg font-semibold text-purple-600">35 μg/m³</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location and Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-500" />
              <span>Current Location</span>
            </CardTitle>
            <CardDescription>Environmental monitoring for your area</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-medium">San Francisco, CA</div>
              <div className="text-sm text-gray-600">Coordinates: 37.7749, -122.4194</div>
              <div className="text-sm text-gray-600">Last updated: 5 minutes ago</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-semibold text-blue-600">3</div>
                <div className="text-sm text-blue-700">Nearby Monitors</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-semibold text-green-600">98%</div>
                <div className="text-sm text-green-700">Data Accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Recommendations</CardTitle>
            <CardDescription>Personalized advice based on current conditions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-800">Safe for outdoor activities</span>
              </div>
              <p className="text-sm text-green-700 mt-1">Air quality is acceptable for most people</p>
            </div>
            
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-yellow-600" />
                <span className="font-medium text-yellow-800">Medium pollen levels</span>
              </div>
              <p className="text-sm text-yellow-700 mt-1">Consider taking antihistamines if sensitive</p>
            </div>
            
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Wind className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-800">Use air purifier indoors</span>
              </div>
              <p className="text-sm text-blue-700 mt-1">Indoor air filtration recommended</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnvironmentalMonitor;
