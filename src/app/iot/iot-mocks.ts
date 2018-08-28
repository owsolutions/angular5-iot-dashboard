import { CloudDeviceType } from "@app/definitions";
import { random } from "@lodash";

export const IotDevices = [
  {
    id: 1,
    name: 'Hall temperature',
    type: CloudDeviceType.TemperatureSensor,
    datasource: 'device-1',
    value: random(10, 30),
    location: 1,
    preferences: {
      DisplayRealTimeTemperatureInSidebar: true,
      DisplayHistoryStatisticsInHome: true
    }
  },
  {
    id: 2,
    name: 'Kitchen temperature',
    type: CloudDeviceType.TemperatureSensor,
    datasource: 'device-2',
    value: random(10, 30),
    location: 1,
    preferences: {
      DisplayRealTimeTemperatureInSidebar: true
    }
  },
  {
    id: 3,
    name: 'Main Lamp',
    type: CloudDeviceType.LampBridge,
    datasource: 'device-4',
    value: 1,
    location: 1,
    preferences: {
      DisplayLampOnOffInHome: true
    }
  },
  {
    id: 4,
    name: 'Lobby humidity',
    type: CloudDeviceType.HumiditySensor,
    datasource: 'device-5',
    value: random(10, 60),
    location: 2,
    preferences: {
      DisplayHumidityInHome: true,
    }
  },
  {
    id: 5,
    name: 'CO2 sensor',
    type: CloudDeviceType.CO2Sensor,
    datasource: 'device-6',
    value: random(100, 600),
    location: 2,
    preferences: {
      DisplayCO2InHome: true
    }
  },
  {
    id: 6,
    name: 'Magnet temperature',
    type: CloudDeviceType.TemperatureSensor,
    datasource: 'device-7',
    value: random(10, 30),
    location: 2,
    preferences: {
      DisplayRealTimeTemperatureInSidebar: true
    }
  },
  {
    id: 7,
    name: 'Negative temperature',
    type: CloudDeviceType.TemperatureSensor,
    datasource: 'device-8',
    value: random(10, 30),
    location: 3,
    preferences: {
      DisplayRealTimeTemperatureInSidebar: true
    }
  },
  {
    id: 8,
    name: 'Thermal temperature',
    type: CloudDeviceType.TemperatureSensor,
    datasource: 'device-9',
    value: random(10, 30),
    location: 3,
    preferences: {
      DisplayRealTimeTemperatureInSidebar: true
    }
  },
];