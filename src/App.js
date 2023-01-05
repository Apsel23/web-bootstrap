import './App.css';
import { Alert, Breadcrumb, Button, Card, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Learning from './components/Learning';
import Amazon from './components/Amazon';
import { useMemo } from 'react';

const sensorData = {
  NOSERNUM_1: {
    Serial: "NOSERNUM",
    Type: "A",
    AssignedZone: "2",
    TempEnable: "DISABLE",
    HumEnable: "DISABLE",
    Model: "NOMODELNUM",
    Name: "Downstairs",
    TempWeight: "33.333333333333336",
    BatteryLevel: "-99",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["*"]
  },
  "2131R5A50X_2131R5A50X": {
    Serial: "2131R5A50X",
    Type: "E",
    AssignedZone: "1",
    TempEnable: "ENABLE",
    HumEnable: "DISABLE",
    Model: "ZSENS930AW00MAA",
    Name: "Wireless Sensor 1",
    TempWeight: "33.333333333333336",
    BatteryLevel: "97",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["*"]
  },
  NOSERNUM_1_1: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "1",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Family Room",
    TempWeight: "33.333333333333336",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["1"]
  },
  NOSERNUM_1_2: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "2",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Zone 2",
    TempWeight: "100",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["2"]
  },
  NOSERNUM_1_3: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "3",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 03",
    TempWeight: "100",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["3"]
  }
};
const oldDataList = {
  NOSERNUM_1: {
    Serial: "NOSERNUM",
    Type: "A",
    AssignedZone: "",
    TempEnable: "ENABLE",
    HumEnable: "ENABLE",
    Model: "NOMODELNUM",
    Name: "UX360 Thermostat 01",
    TempWeight: "33.3",
    BatteryLevel: "-99",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["*"]
  },
  "2131R5A50X_2131R5A50X": {
    Serial: "2131R5A50X",
    Type: "E",
    AssignedZone: "3",
    TempEnable: "ENABLE",
    HumEnable: "ENABLE",
    Model: "ZSENS930AW00MAA",
    Name: "Wireless Sensor 2",
    TempWeight: "33.3",
    BatteryLevel: "95",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["*"]
  },
  NOSERNUM_1_1: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "1",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 01",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["1"]
  },
  NOSERNUM_1_2: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "2",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 02",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["2"]
  },
  NOSERNUM_1_3: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "3",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 03",
    TempWeight: "33.3",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["3"]
  },
  NOSERNUM_2_1: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "4",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 04",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["4"]
  },
  NOSERNUM_2_2: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "5",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 05",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["5"]
  },
  NOSERNUM_2_3: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "6",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 06",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["6"]
  }
};
const newDataList = {
  NOSERNUM_1_1: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "1",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 01",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["1"]
  },
  NOSERNUM_1_2: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "2",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 02",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["2"]
  },
  "2131R5A50X_2131R5A50X": {
    Serial: "2131R5A50X",
    Type: "E",
    AssignedZone: "3",
    TempEnable: "ENABLE",
    HumEnable: "ENABLE",
    Model: "ZSENS930AW00MAA",
    Name: "Wireless Sensor 2",
    TempWeight: "50.0",
    BatteryLevel: "95",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["*"]
  },
  NOSERNUM_1_3: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "3",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 03",
    TempWeight: "50.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["3"]
  },
  NOSERNUM_2_1: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "4",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 04",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["4"]
  },
  NOSERNUM_2_2: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "5",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 05",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["5"]
  },
  NOSERNUM_2_3: {
    Serial: "NOSERNUM",
    Type: "D",
    AssignedZone: "6",
    TempEnable: "ENABLE",
    HumEnable: "NOT_APPLICABLE",
    Model: "NOMODELNUM",
    Name: "Wired Sensor 06",
    TempWeight: "100.0",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["6"]
  },
  NOSERNUM_1: {
    Serial: "NOSERNUM",
    Type: "A",
    AssignedZone: "",
    TempEnable: "ENABLE",
    HumEnable: "ENABLE",
    Model: "NOMODELNUM",
    Name: "UX360 Thermostat 01",
    TempWeight: "-99.0",
    BatteryLevel: "-99",
    ConnectionStatus: { text: "Online", color: "good" },
    ApplicableZones: ["*"]
  }
};
function App() {
  // const finalData=newDataList.filter(newData=>oldDataList.find(oldData=>oldData!==newData))
  // const finalData = useMemo(() => {
  //   Object.entries(newDataList).map(([key, value]) => {
  //     console.log("csjncjns", JSON.stringify(key),JSON.stringify(value));
  //     console.log('cndc',JSON.stringify(oldDataList[key]) === JSON.stringify(value))
  //     console.log('bsxhsbcjsbc',JSON.stringify(oldDataList[key]))
  //   });
  //   return "Apsel";
  // }, []);
  const finalData = useMemo(() =>  Object.fromEntries(Object.entries(newDataList).filter(([key, value]) => JSON.stringify(oldDataList[key]) !== JSON.stringify(value))), []);
  console.log("finalData", JSON.stringify(finalData));
  return <div style={{}}>
    <Amazon />
    <div style={{ flex: 1, color: 'red', backgroundColor: 'white', height: '1400px' }}></div>
  </div>
}

export default App;
