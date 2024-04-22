const express = require('express');
const app = express();
app.use(express.json());
let patients = [
  { id: 1, name: 'John Doe', age: 35, gender: 'Male', condition: 'Fever' },
  { id: 2, name: 'Jane Smith', age: 45, gender: 'Female', condition: 'Fracture' },
];
app.get('/', (req, res) => {
  res.json(patients);
});
app.post('/patients', (req, res) => {
  const { name, age, gender, condition } = req.body;
  const id = patients.length + 1;
  const newPatient = { id, name, age, gender, condition };
  patients.push(newPatient);
  res.status(201).json(newPatient);
});
app.get('/patients/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const patient = patients.find(patient => patient.id === id);
  if (!patient) {
    res.status(404).json({ error: 'Patient not found' });
  } else {
    res.json(patient);
  }
});
module.exports = app;
