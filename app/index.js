// const express = require('express');
// const app = express();
// const port = 3000;

// const { Counter, register } = require('prom-client');
// const counter = new Counter({
//   name: 'http_requests_total',
//   help: 'Total number of HTTP requests',
// });

// app.get('/', (req, res) => {
//   console.log(`[${new Date().toISOString()}] GET /`);
//   counter.inc();
//   res.send('Hello, Observability!');
// });

// app.get('/metrics', async (req, res) => {
//   res.set('Content-Type', register.contentType);
//   res.end(await register.metrics());
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });

const express = require('express');
const app = express();
const promClient = require('prom-client');

// Prometheus metrics setup
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestCounter = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
});

app.get('/', (req, res) => {
  console.log(`[${new Date().toISOString()}] GET /`);
  httpRequestCounter.inc();
  res.send('Hello from the Observability App!');
});

// Expose /metrics for Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});

// Simulate a traced endpoint
app.get('/trace', (req, res) => {
  console.log(`[${new Date().toISOString()}] GET /trace`);
  res.send('This request can be traced.');
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});
